import { StyledHeading } from './Heading.styled';
import type { HeadingProps } from './Heading.interface';

function Heading({ children, as = 'h1', $pushDown = [1, 1, 1] }: HeadingProps) {
  return (
    <StyledHeading as={as} $pushDown={$pushDown}>
      {children}
    </StyledHeading>
  );
}

export default Heading;
