export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  $fallback?: string;
  $rounded?: boolean;
  $fullWidth?: boolean;
  $pushDown?: number[];
}
