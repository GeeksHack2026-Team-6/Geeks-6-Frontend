import { useId, useState } from "react";
import { Icon } from "../Icon";
import {
  ErrorMessage,
  FieldLine,
  FieldRoot,
  TextInput,
  VisibilityButton,
  VisuallyHidden,
} from "./InputField.style";
import type { InputFieldProps } from "./InputField.types";

export function InputField({
  label,
  icon,
  value,
  onChange,
  type = "text",
  error,
  autoComplete,
  inputMode,
  maxLength,
}: InputFieldProps) {
  const [isVisible, setIsVisible] = useState(false);
  const errorId = useId();
  const isPassword = type === "password";

  return (
    <FieldRoot $hasError={Boolean(error)}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <FieldLine>
        <Icon name={icon} />
        <TextInput
          type={isPassword && isVisible ? "text" : type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={label}
          autoComplete={autoComplete}
          inputMode={inputMode}
          maxLength={maxLength}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
        />
        {isPassword && (
          <VisibilityButton
            type="button"
            onClick={() => setIsVisible((current) => !current)}
            aria-label={isVisible ? "비밀번호 숨기기" : "비밀번호 보이기"}>
            <Icon name={isVisible ? "eye-visible" : "eye-hidden"} size={18} />
          </VisibilityButton>
        )}
      </FieldLine>
      {error && (
        <ErrorMessage id={errorId} role="alert">
          {error}
        </ErrorMessage>
      )}
    </FieldRoot>
  );
}
