import { FeedbackOptions } from './Buttons/FeedbackOptions';
import { Statistics } from './Statistic/Statistics';
import { Section } from './SectionWrapper/Section';
import { Notification } from './Notification/Notification';
const { useState } = require('react');


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = type => {
    if (type === 'good') {
      setGood(prevGood => prevGood + 1);
    } else if (type === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    } else if (type === 'bad') {
      setBad(prevBad => prevBad + 1);
    }

    switch (type) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  
  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  };

 
   
    const options = ['good', 'neutral', 'bad'];
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions clickFeedback={handleFeedback} options={options} />
        </Section>

        <Section title="Statistics">
          { countTotalFeedback() ? (<Statistics
            good={ good }
            neutral={ neutral }
            bad={ bad }
            total={ countTotalFeedback } positivePercentage={ countPositiveFeedbackPercentage } />) :
            (<Notification message="There is no feedback" />) }
          
        </Section>
      </>
    )
}