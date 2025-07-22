import styled from 'styled-components';
import type { InputProps } from './Input.interface';

export const StyledInput = styled.input<InputProps>`
  ${({ theme: { spacing, colors }, $fullWidth }) => `
    width: ${$fullWidth ? '100%' : 'auto'};
    padding: ${spacing.md};
    border: 1px solid ${colors.border};
  `}
`;
