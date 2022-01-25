import { PropTypes } from 'common';
import { FeedbackBtnStyled } from './FeedbackOptions.styled';

const smile = name =>
  Object.entries({
    good: '🤩',
    neutral: '🙂',
    bad: '👎',
  }).find(entry => entry[0] === name)[1];

export const FeedbackBtn = ({ name, ...props }) => (
  <FeedbackBtnStyled name={name} {...props}>
    <span>{smile(name)}</span>
    <span>{name}</span>
  </FeedbackBtnStyled>
);

FeedbackBtn.propTypes = {
  name: PropTypes.string.isRequired,
};
