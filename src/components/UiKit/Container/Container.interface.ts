export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  $pushTop?: number[];
  $pushBottom?: number[];
}
