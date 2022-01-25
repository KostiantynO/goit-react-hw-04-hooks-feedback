import { Container, PropTypes } from 'common';
import { SectionStyled, SectionTitleStyled } from './Section.styled';
export const Section = ({ title, children, ...props }) => (
  <SectionStyled {...props}>
    <Container>
      <SectionTitleStyled>
        <span>{title}</span>
      </SectionTitleStyled>
    </Container>

    {children}
  </SectionStyled>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
