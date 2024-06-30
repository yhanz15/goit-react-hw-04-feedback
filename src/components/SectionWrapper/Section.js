import PropTypes from 'prop-types';
import { SectionWrapper, Title } from './Section.styled';

export function Section({ title, children }) {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      {children}
    </SectionWrapper>
  );
}

StaticRange.PropTypes = {
  title: PropTypes.string,
};
