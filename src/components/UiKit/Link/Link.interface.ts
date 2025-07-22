export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  $underline?: boolean;
  $external?: boolean;
}
