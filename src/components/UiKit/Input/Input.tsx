import type { InputProps } from './Input.interface';
import { StyledInput } from './Input.styled';

function Input({
  type = 'text',
  value,
  placeholder = 'Enter text here',
  $fullWidth = false,
  onValueChange = () => {},
}: InputProps) {
  return (
    <StyledInput
      value={value}
      type={type}
      placeholder={placeholder}
      $fullWidth={$fullWidth}
      onChange={(e) => onValueChange(e.target.value)}
    />
  );
}

export default Input;
