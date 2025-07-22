export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id?: string;
  label: string;
  options: {
    label: string;
    value: string;
  }[];
  value: string;
  onValueChange: (val: string) => void;
}
