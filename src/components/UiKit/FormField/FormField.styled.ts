import styled from 'styled-components';

export const StyledFormField = styled.div`
  ${({ theme: { spacing } }) => `
    margin-bottom: ${spacing.md};
  `}
`;
