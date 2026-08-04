import type { HTMLInputTypeAttribute } from "react";
import type { IconName } from "../Icon";

export interface InputFieldProps {
  label: string;
  icon: IconName;
  value: string;
  onChange: (value: string) => void;
  type?: HTMLInputTypeAttribute;
  error?: string;
  autoComplete?: string;
  inputMode?: "text" | "email" | "numeric";
  maxLength?: number;
}
