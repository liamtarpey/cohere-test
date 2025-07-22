import type { ElementType, ReactNode } from 'react';

export type AsType = ElementType;

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  as?: AsType;
  $pushDown?: number[];
}
