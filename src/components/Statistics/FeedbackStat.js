import { PropTypes } from 'common';
import { FeedbackStatStyled } from './Statistics.styled';

import AnimatedNumber from 'animated-number-react';

export const FeedbackStat = ({ sign, label, score }) => {
  const formatValue = value =>
    sign === '%' ? value.toFixed(0) + '%' : value.toFixed(0);

  return (
    <FeedbackStatStyled>
      {label}:
      <AnimatedNumber value={score} formatValue={formatValue} duration={210} />
    </FeedbackStatStyled>
  );
};

FeedbackStat.propTypes = {
  sign: PropTypes.string,
  label: PropTypes.string.isRequired,
  score: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
