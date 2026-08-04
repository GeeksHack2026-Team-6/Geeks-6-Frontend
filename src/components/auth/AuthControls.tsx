import { useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../Icon";
import type { IconName } from "../Icon";

interface FieldProps {
  label: string;
  icon: IconName;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "password";
  error?: string;
  autoComplete?: string;
  inputMode?: "text" | "email" | "numeric";
  maxLength?: number;
}

export function Field({
  label,
  icon,
  value,
  onChange,
  type = "text",
  error,
  autoComplete,
  inputMode,
  maxLength,
}: FieldProps) {
  const [visible, setVisible] = useState(false);
  const isPassword = type === "password";

  return (
    <label className={`field ${error ? "has-error" : ""}`}>
      <span className="sr-only">{label}</span>
      <span className="field-line">
        <Icon name={icon} className="field-icon" />
        <input
          type={isPassword && visible ? "text" : type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={label}
          autoComplete={autoComplete}
          inputMode={inputMode}
          maxLength={maxLength}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${label}-error` : undefined}
        />
        {isPassword && (
          <button
            className="visibility-button"
            type="button"
            onClick={() => setVisible((current) => !current)}
            aria-label={visible ? "비밀번호 숨기기" : "비밀번호 보이기"}>
            <Icon name={visible ? "eye-visible.svg" : "eye-hidden.svg"} />
          </button>
        )}
      </span>
      {error && <span className="field-error" id={`${label}-error`}>{error}</span>}
    </label>
  );
}

export function PrimaryButton({ children, disabled, type = "button" }: { children: ReactNode; disabled?: boolean; type?: "button" | "submit" }) {
  return <button className="primary-button" type={type} disabled={disabled}>{children}</button>;
}

export function AuthFooter({ prompt, linkText, to }: { prompt: string; linkText: string; to: string }) {
  return <p className="auth-footer">{prompt} <Link to={to}>{linkText}</Link></p>;
}
