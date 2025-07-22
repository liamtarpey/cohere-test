import styled, { css } from 'styled-components';
import type { FlexProps } from './Flex.interface';

export const StyledFlex = styled.div<FlexProps>`
  ${({
    theme: { breakpoints },
    $direction,
    $align,
    $justify,
    $stackOnMobile,
  }) => css`
    display: flex;
    flex-direction: ${$direction};
    align-items: ${$align};
    justify-content: ${$justify};

    /**
     * In a prod application you'd probably want more flexibility
     * than just a $stackOnMobile prop, maybe something really expandable
     * to create custom layouts, but sticking with this simple approach until more is needed.
     */
    ${$stackOnMobile &&
    css`
      @media (max-width: ${breakpoints.sm}) {
        flex-direction: column;
      }
    `}
  `}
`;
