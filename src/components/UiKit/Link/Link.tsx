import { StyledLink } from './Link.styled';
import type { LinkProps } from './Link.interface';

function Link({ children, $external, ...rest }: LinkProps) {
  return (
    <StyledLink
      target={$external ? '_blank' : rest.target}
      rel={$external ? 'noopener noreferrer' : rest.rel}
      {...rest}
    >
      {children}
    </StyledLink>
  );
}

export default Link;
