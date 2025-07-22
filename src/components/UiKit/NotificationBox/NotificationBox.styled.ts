import styled from 'styled-components';
import type { NotificationBoxVariant } from './NotificationBox.interface';
import { theme } from '@theme';

const getBackgroundColor = (
  $variant: NotificationBoxVariant,
  colors: typeof theme.colors,
) => {
  switch ($variant) {
    case 'success':
    default:
      return colors.successBg;
    case 'warning':
      return colors.warningBg;
    case 'danger':
      return colors.errorBg;
  }
};

const getTextColor = (
  $variant: NotificationBoxVariant,
  colors: typeof theme.colors,
) => {
  switch ($variant) {
    case 'success':
    default:
      return colors.successText;
    case 'warning':
      return colors.warningText;
    case 'danger':
      return colors.errorText;
  }
};

export const StyledNotificationBox = styled.div<{
  $variant: NotificationBoxVariant;
}>`
  ${({ theme: { colors, spacing, radii }, $variant }) => `
      background-color: ${getBackgroundColor($variant, colors)};
      color: ${getTextColor($variant, colors)};
      padding: ${spacing.lg};
      border-radius: ${radii.md};
      margin: ${spacing.md} 0;
  `}
`;
