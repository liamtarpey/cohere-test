import { useState } from 'react';
import type { ImageProps } from './Image.interface';
import { StyledImage } from './Image.styled';

function Image({
  src,
  $fallback = '/react.svg',
  $rounded = false,
  $fullWidth = false,
  $pushDown = [1, 1, 1],
  ...props
}: ImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);

  const handleError = () => {
    setImgSrc($fallback);
  };

  return (
    <StyledImage
      src={imgSrc ?? $fallback}
      $rounded={$rounded}
      $fullWidth={$fullWidth}
      $pushDown={$pushDown}
      loading="lazy"
      onError={handleError}
      {...props}
    />
  );
}

export default Image;
