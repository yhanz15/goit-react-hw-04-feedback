import PropTypes from 'prop-types';
import { ButtonsWrappper, ButtonFeedback } from './FeedbackOptions.styled';

export function FeedbackOptions({ clickFeedback, options }) {
  return (
    <ButtonsWrappper>
      {options.map(option => (
        <ButtonFeedback key={option} onClick={() => clickFeedback(option)}>
          {option}
        </ButtonFeedback>
      ))}
    </ButtonsWrappper>
  );
}

StaticRange.PropTypes = {
  clickFeedback: PropTypes.func,
  contentBtn: PropTypes.array,
};
