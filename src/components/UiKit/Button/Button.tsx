import type { ButtonProps } from './Button.interface';
import { StyledButton } from './Button.styled';

function Button({ children, ...rest }: ButtonProps) {
  return (
    <StyledButton type="submit" {...rest}>
      {children}
    </StyledButton>
  );
}

export default Button;
