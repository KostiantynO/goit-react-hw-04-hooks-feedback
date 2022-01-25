import { styled } from 'common';
import { ButtonStyled } from 'common/components/Button';

export const FeedbackOptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(12px, 2.1vw, 16px);

  padding: 16px 0px;
  margin: 0 auto;
`;

export const FeedbackOptionsItemStyled = styled.li``;

export const FeedbackBtnStyled = styled(ButtonStyled)`
  width: clamp(120px, 20vw, 200px);
  gap: clamp(4px, 2.1vw, 12px);
`;
