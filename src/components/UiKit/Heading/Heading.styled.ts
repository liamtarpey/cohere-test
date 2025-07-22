import styled from 'styled-components';
import { theme } from '@theme';
import type { HeadingProps, AsType } from './Heading.interface';

const getFontSize = (level: AsType, fontSizes: typeof theme.fontSizes) => {
  switch (level) {
    case 'h1':
    default:
      return fontSizes.lg;
    case 'h2':
      return fontSizes.md;
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return fontSizes.sm;
  }
};

/**
 * This component uses the `as` prop out of the box to switch
 * between html heading elements. By default it's a h1.
 */
export const StyledHeading = styled.h1<HeadingProps>`
  ${({ theme: { colors, fontSizes, breakpoints }, as, $pushDown }) => `
    font-size: ${getFontSize(as as AsType, fontSizes)};
    color: ${colors.textPrimary};
    margin-top: 0;
    margin-bottom: ${$pushDown ? $pushDown[0] : 0}rem;

    @media (min-width: ${breakpoints.md}) {
      margin-bottom: ${$pushDown ? $pushDown[1] : 0}rem;
    }

    @media (min-width: ${breakpoints.lg}) {
      margin-bottom: ${$pushDown ? $pushDown[2] : 0}rem;
    }
  `}
`;
