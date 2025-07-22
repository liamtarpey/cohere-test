import styled from 'styled-components';
import type { TextProps, VariantType } from './Text.interface';
import { theme } from '@theme';

const getTextColor = ($variant: VariantType, colors: typeof theme.colors) => {
  switch ($variant) {
    case 'primary':
    default:
      return colors.textPrimary;
    case 'secondary':
      return colors.textSecondary;
  }
};

const getFontSize = ($size: string, fontSizes: typeof theme.fontSizes) => {
  switch ($size) {
    case 'md':
    default:
      return fontSizes.md;
    case 'xs':
      return fontSizes.xs;
    case 'sm':
      return fontSizes.sm;
    case 'lg':
      return fontSizes.lg;
  }
};

const getFontWeight = (
  $weight: string,
  fontWeights: typeof theme.fontWeights,
) => {
  switch ($weight) {
    case 'md':
    default:
      return fontWeights.md;
    case 'sm':
      return fontWeights.sm;
  }
};

export const StyledText = styled.p<TextProps>`
  ${({
    theme: { colors, fontWeights, fontSizes },
    $variant,
    $uppercase,
    $weight,
    $size,
    $pushDown,
  }) => `
    color: ${getTextColor($variant as VariantType, colors)};
    text-transform: ${$uppercase ? 'uppercase' : 'none'};
    margin-top: 0;
    margin-bottom: ${$pushDown ? $pushDown[0] : 0}rem;
    font-weight: ${getFontWeight($weight as string, fontWeights)};
    font-size: ${getFontSize($size as string, fontSizes)};
  `}
`;
