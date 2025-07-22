import styled from 'styled-components';

export const StyledSelect = styled.select`
  ${({ theme: { colors, radii, spacing } }) => `
    border-radius: ${radii.md};
    padding: ${spacing.md};
    border: 1px solid ${colors.border};
    appearance: none; 
  `}
`;
