import type { FormEventHandler, ReactNode } from "react";

export type AuthFormVariant = "login" | "signup";
export interface AuthFormProps {
  variant: AuthFormVariant;
  isVerification?: boolean;
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
}
