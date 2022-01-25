import { PropTypes } from 'common';
import { StatItemStyled } from './Statistics.styled';

export const StatItem = obj => (
  <StatItemStyled key={Object.keys(obj)}>
    <p>
      <span>{Object.keys(obj)}:</span> <span>{Object.values(obj)}</span>
    </p>
  </StatItemStyled>
);

StatItem.propTypes = {
  obj: PropTypes.objectOf(PropTypes.string).isRequired,
};
