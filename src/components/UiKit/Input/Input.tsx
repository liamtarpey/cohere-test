import type { InputProps } from './Input.interface';
import { StyledInput } from './Input.styled';

function Input({
  type = 'text',
  placeholder = 'Enter text here',
  $fullWidth = false,
  onValueChange = () => {},
}: InputProps) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      $fullWidth={$fullWidth}
      onChange={(e) => onValueChange(e.target.value)}
    />
  );
}

export default Input;
