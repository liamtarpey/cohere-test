import type { SelectProps } from './Select.interface';
import { StyledSelect } from './Select.styled';

function Select({
  id = 'select-dropdown',
  label,
  options,
  value,
  onValueChange,
}: SelectProps) {
  return (
    <StyledSelect
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
      id={id}
    >
      <option value="">{label}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
