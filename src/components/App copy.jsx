import { Component } from 'react';
import { FeedbackOptions } from './Buttons/FeedbackOptions';
import { Statistics } from './Statistic/Statistics';
import { Section } from './SectionWrapper/Section'
import { Notification } from './Notification/Notification'


export class App extends Component  {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  //   total: 0
  // };

  // handleFeedback = type => {
  //   this.setState(prevState => {
  //     return {
  //       [type]: prevState[type] + 1,
  //       total: prevState.total + 1
  //     }
  //   })
  // };

  // countTotalFeedback = () => {
  //   return this.state.total;
  // };

  // countPositiveFeedbackPercentage = () => {
  //   const { good, total } = this.state;
  //   return total === 0 ? 0 : Math.round((good / total) * 100);
  // };
  
  // render() {
  //   const { good, neutral, bad } = this.state;
  //   const options = ['good', 'neutral', 'bad'];
  //   return (
  //     <>
  //       <Section title="Please leave feedback">
  //         <FeedbackOptions clickFeedback={this.handleFeedback} options={options} />
  //       </Section>
  //       <Section title="Statistics">

  //         {this.countTotalFeedback() === 0 ? (<Notification message="There is no feedback" />) :
  //         (<Statistics
  //         good={good}
  //         neutral={neutral}
  //         bad={bad}
  //         total={this.countTotalFeedback}
  //           positivePercentage={this.countPositiveFeedbackPercentage} />)}
          
  //       </Section>
  //     </>
  //   )
  // };
}
