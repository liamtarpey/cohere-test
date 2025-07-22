import { StyledFlex } from './Flex.styled';
import type { FlexProps } from './Flex.interface';

function Flex({
  children,
  $direction = 'row',
  $align = 'flex-start',
  $justify = 'flex-start',
  $stackOnMobile = true,
}: FlexProps) {
  return (
    <StyledFlex
      $direction={$direction}
      $align={$align}
      $justify={$justify}
      $stackOnMobile={$stackOnMobile}
    >
      {children}
    </StyledFlex>
  );
}

export default Flex;
