import styled from 'styled-components';
import type { ButtonProps } from './Button.interface';

export const StyledButton = styled.button<ButtonProps>`
  ${({ theme: { spacing, radii, colors } }) => `
    border: none;
    cursor: pointer;
    padding: ${spacing.sm} ${spacing.md};
    border-radius: ${radii.sm};
    background-color: ${colors.button};
    color: ${colors.textLight};
    border-radius: ${radii.md};

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `}
`;
