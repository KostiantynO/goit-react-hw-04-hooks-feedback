import { PropTypes } from 'common';
import { FeedbackBtn } from './FeedbackBtn';
import { FeedbackOptionsItemStyled } from './FeedbackOptions.styled';

export const OptionItem = ({ option, onLeaveFeedback }) => (
  <FeedbackOptionsItemStyled>
    <FeedbackBtn name={option} onClick={onLeaveFeedback} />
  </FeedbackOptionsItemStyled>
);

OptionItem.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
