export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  $fullWidth?: boolean;
  onValueChange?: (val: string) => void;
}
