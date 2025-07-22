import { StyledText } from './Text.styled';
import type { TextProps } from './Text.interface';

function Text({
  children,
  as = 'p',
  $variant = 'primary',
  $uppercase = false,
  $weight = 'md',
  $size = 'md',
  $pushDown = [1, 1, 1],
}: TextProps) {
  return (
    <StyledText
      as={as}
      $variant={$variant}
      $uppercase={$uppercase}
      $weight={$weight}
      $size={$size}
      $pushDown={$pushDown}
    >
      {children}
    </StyledText>
  );
}

export default Text;
