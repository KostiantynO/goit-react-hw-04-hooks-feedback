import { PropTypes } from 'common';
import {
  StatisticsStyled,
  StatListStyled,
  StatItemStyled,
  FeedbackStatStyled,
} from './Statistics.styled';

import AnimatedNumber from 'animated-number-react';

const listItem = obj => (
  <StatItemStyled key={Object.keys(obj)}>
    <p>
      <span>{Object.keys(obj)}:</span> <span>{Object.values(obj)}</span>
    </p>
  </StatItemStyled>
);

const FeedbackStat = ({ sign, label, score }) => {
  const formatValue = value =>
    sign === '%' ? value.toFixed(0) + '%' : value.toFixed(0);

  return (
    <FeedbackStatStyled>
      {label}:
      <AnimatedNumber value={score} formatValue={formatValue} duration={210} />
    </FeedbackStatStyled>
  );
};

export const Statistics = ({
  good,
  neutral,
  bad,

  total,
  positivePercentage,
}) => {
  const options = [{ good }, { neutral }, { bad }];
  return (
    <StatisticsStyled>
      <StatListStyled>{options.map(listItem)}</StatListStyled>
      <FeedbackStat label="Total" score={total} />
      <FeedbackStat
        label="Positive feedback"
        sign="%"
        score={positivePercentage}
      />
    </StatisticsStyled>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
