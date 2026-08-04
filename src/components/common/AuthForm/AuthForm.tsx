import { Form } from "./AuthForm.style";
import type { AuthFormProps } from "./AuthForm.types";

export function AuthForm({
  variant,
  isVerification = false,
  children,
  onSubmit,
}: AuthFormProps) {
  return (
    <Form
      $variant={variant}
      $isVerification={isVerification}
      onSubmit={onSubmit}
      noValidate>
      {children}
    </Form>
  );
}
