import { PropTypes } from 'common';
import { FeedbackStat } from './FeedbackStat';
import { StatisticsStyled, StatListStyled } from './Statistics.styled';
import { StatItem } from './StatItem';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <StatisticsStyled>
    <StatListStyled>
      {[{ good }, { neutral }, { bad }].map(StatItem)}
    </StatListStyled>

    <FeedbackStat label="Total" score={total} />

    <FeedbackStat
      label="Positive feedback"
      sign="%"
      score={positivePercentage}
    />
  </StatisticsStyled>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
