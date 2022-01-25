import { styled } from 'common';

export const NotificationStyled = styled.p`
  padding: ${({ theme }) => theme.spacing(2, 0)};
  margin-bottom: clamp(20px, 2.1vw, 32px);
  font-size: clamp(1.5rem, 4vw, 2rem);
  transform: translateX(50%);
  ${({ theme }) => theme.transition('transform')}

  > span {
    display: inline-block;
    transform: translateX(-50%);
    ${({ theme }) => theme.transition('transform')}
    text-align: center;
  }
`;
