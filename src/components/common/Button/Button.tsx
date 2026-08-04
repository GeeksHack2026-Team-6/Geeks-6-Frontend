import { StyledButton } from "./Button.style";
import type { ButtonProps } from "./Button.types";

export function Button({ variant = "primary", type = "button", ...props }: ButtonProps) {
  return <StyledButton $variant={variant} type={type} {...props} />;
}
