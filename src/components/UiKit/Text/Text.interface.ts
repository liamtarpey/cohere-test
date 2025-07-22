import type { ReactNode } from 'react';

export type VariantType = 'primary' | 'secondary';
export type TextElements = 'p' | 'span';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  $variant?: VariantType;
  $uppercase?: boolean;
  $weight?: string | undefined;
  $size?: string | undefined;
  as?: TextElements;
  children: ReactNode;
  $pushDown?: number[];
}
