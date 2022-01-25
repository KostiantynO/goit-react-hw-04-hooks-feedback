import { styled } from 'common';

export const AppStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(4px, 2.1vw, 16px);

  max-width: 900px;
  margin: 0 auto;

  > section:first-of-type {
    flex-basis: calc(60% - 8px);
  }

  > section:nth-of-type(2) {
    flex-basis: calc(40% - 8px);
  }
`;
