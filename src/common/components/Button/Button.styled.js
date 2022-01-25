import { styled } from 'common';

export const ButtonStyled = styled.button.attrs(({ type }) => ({
  type: type === 'submit' ? 'submit' : 'button',
}))`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: clamp(8px, 2.1vw, 12px) clamp(4px, 2.1vw, 12px);

  font-family: inherit;
  font-size: clamp(1.1rem, 2.1vw, 1.5rem);
  color: ${({ theme }) => theme.colors.white};

  background: none;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border: none;
  border-radius: ${({ theme, round }) => (round ? '50%' : theme.spacing(1))};
  appearance: none;

  ${({ theme }) => theme.transition('color', 'background-color', 'transform')};

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.03);
  }
`;
