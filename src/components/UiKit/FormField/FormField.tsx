import { StyledFormField } from './FormField.styled';

function FormField({ children }: { children: React.ReactNode }) {
  return <StyledFormField>{children}</StyledFormField>;
}

export default FormField;
