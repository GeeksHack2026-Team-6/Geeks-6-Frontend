import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AuthFooter, Field, PrimaryButton } from "../components/auth/AuthControls";
import { MobileFrame } from "../components/MobileFrame";

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const emailError = submitted && !/^\S+@\S+\.\S+$/.test(email) ? "이메일 형식을 확인해주세요" : undefined;
  const passwordError = submitted && password.length < 6 ? "비밀번호는 6글자 이상이어야 해요" : undefined;
  const ready = /^\S+@\S+\.\S+$/.test(email) && password.length >= 6;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    if (ready) navigate("/");
  }

  return (
    <MobileFrame className="auth-screen">
      <form className="auth-content login-content" onSubmit={handleSubmit} noValidate>
        <p className="brand">GreenPick</p>
        <h1>로그인</h1>
        <div className="auth-fields">
          <Field label="이메일" icon="email.svg" value={email} onChange={setEmail} type="email" autoComplete="email" error={emailError} />
          <Field label="비밀번호" icon="password-lock.svg" value={password} onChange={setPassword} type="password" autoComplete="current-password" error={passwordError} />
        </div>
        <button className="forgot-password" type="button" onClick={() => window.alert("비밀번호 찾기 기능을 준비 중입니다.")}>비밀번호를 잊으셨나요?</button>
        <div className="auth-actions">
          <PrimaryButton type="submit" disabled={!ready}>로그인</PrimaryButton>
          <AuthFooter prompt="아직 회원이 아니신가요?" linkText="회원가입 하러가기" to="/signup" />
        </div>
      </form>
    </MobileFrame>
  );
}
