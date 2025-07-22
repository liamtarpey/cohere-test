import styled from 'styled-components';

export const StyledContainer = styled.div<{
  $pushTop: number[];
  $pushBottom: number[];
}>`
  ${({ theme: { layout, breakpoints, spacing }, $pushTop, $pushBottom }) => `
    padding: ${spacing.sm};
    max-width: ${layout.maxWidth};    
    margin: 0 auto;
    margin-top: ${$pushTop[0]}rem;
    margin-bottom: ${$pushBottom[0]}rem;

    @media (min-width: ${breakpoints.md}) {
      margin-top: ${$pushTop[1]}rem;
      margin-bottom: ${$pushBottom[1]}rem;
    }

    @media (min-width: ${breakpoints.lg}) {
      margin-top: ${$pushTop[2]}rem;
      margin-bottom: ${$pushBottom[2]}rem;
    }
  `}
`;
