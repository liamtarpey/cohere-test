import { StyledContainer } from './Container.styled';
import type { ContainerProps } from './Container.interface';

function Container({
  children,
  $pushTop = [0, 0, 0],
  $pushBottom = [0, 0, 0],
  ...rest
}: ContainerProps) {
  return (
    <StyledContainer $pushTop={$pushTop} $pushBottom={$pushBottom} {...rest}>
      {children}
    </StyledContainer>
  );
}

export default Container;
