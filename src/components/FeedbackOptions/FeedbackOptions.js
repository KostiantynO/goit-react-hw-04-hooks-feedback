import { PropTypes } from 'common';
import {
  FeedbackOptionsList,
  FeedbackOptionsItemStyled,
  FeedbackBtnStyled,
} from './FeedbackOptions.styled';

const smile = name =>
  Object.entries({
    good: '🤩',
    neutral: '🙂',
    bad: '👎',
  }).find(entry => entry[0] === name)[1];

const FeedbackBtn = ({ name, ...props }) => (
  <FeedbackBtnStyled name={name} {...props}>
    <span>{smile(name)}</span>
    <span>{name}</span>
  </FeedbackBtnStyled>
);

const optionItem = (option, callback) => (
  <FeedbackOptionsItemStyled key={option}>
    <FeedbackBtn name={option} onClick={callback} />
  </FeedbackOptionsItemStyled>
);

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackOptionsList>
    {options.map(option => optionItem(option, onLeaveFeedback))}
  </FeedbackOptionsList>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
