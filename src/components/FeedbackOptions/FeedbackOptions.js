import { PropTypes } from 'common';
import { FeedbackOptionsList } from './FeedbackOptions.styled';
import { OptionItem } from './OptionItem';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackOptionsList>
    {options.map(option => (
      <OptionItem
        key={option}
        option={option}
        onLeaveFeedback={onLeaveFeedback}
      />
    ))}
  </FeedbackOptionsList>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
