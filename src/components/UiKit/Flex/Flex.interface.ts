export type FlexDirection = 'row' | 'column';
export type FlexAlign = 'flex-start' | 'center' | 'flex-end';
export type FlexJustify = 'flex-start' | 'center' | 'flex-end';

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  $direction?: FlexDirection;
  $align?: FlexAlign;
  $justify?: FlexJustify;
  $stackOnMobile?: boolean;
  children: React.ReactNode;
}
