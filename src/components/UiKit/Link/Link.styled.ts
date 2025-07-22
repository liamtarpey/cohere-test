import styled from 'styled-components';
import type { LinkProps } from './Link.interface';

export const StyledLink = styled.a<Pick<LinkProps, '$underline'>>`
  ${({ theme: { colors, spacing }, $underline }) => `
   display: inline-block;
    color: ${colors.link};
    text-decoration: ${$underline ? 'underline' : 'none'};
    cursor: pointer;
    margin-bottom: ${spacing.md};

    &:hover {
      text-decoration: underline;
    }
  `}
`;
