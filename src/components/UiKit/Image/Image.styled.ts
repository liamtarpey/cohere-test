import styled from 'styled-components';
import type { ImageProps } from './Image.interface';

export const StyledImage = styled.img<ImageProps>`
  ${({ theme: { radii }, $rounded, $fullWidth, $pushDown }) => `
    border-radius: ${$rounded ? radii.md : 0};
    overflow: hidden;
    width: ${$fullWidth ? '100%' : 'auto'};
    margin-bottom: ${$pushDown ? $pushDown[0] : 0}rem;
  `};
`;
