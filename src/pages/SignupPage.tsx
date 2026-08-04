import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AuthFooter, Field, PrimaryButton } from "../components/auth/AuthControls";
import { Icon } from "../components/Icon";
import { MobileFrame } from "../components/MobileFrame";

type SignupStep = "profile" | "verification" | "password";

export function SignupPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState<SignupStep>("profile");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verificationAttempted, setVerificationAttempted] = useState(false);
  const [resent, setResent] = useState(false);
  const validEmail = /^\S+@\S+\.\S+$/.test(email);
  const profileReady = name.trim().length > 0 && validEmail;
  const passwordReady = password.length >= 6 && password === confirmPassword;
  const emailError = email && !validEmail ? "이메일의 형식이 잘못되었어요" : undefined;
  const passwordError =
    password && password.length < 6 ? "비밀번호는 6글자 이상이어야 해요" : undefined;
  const confirmError =
    confirmPassword && password !== confirmPassword
      ? "비밀번호가 일치하지 않아요"
      : undefined;
  const verificationReady = /^\d{6}$/.test(verificationCode);
  const verificationError =
    verificationAttempted && !verificationReady
      ? "인증코드를 다시 확인해주세요"
      : undefined;

  function continueSignup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step === "profile" && profileReady) setStep("verification");
    if (step === "verification") {
      setVerificationAttempted(true);
      if (verificationReady) setStep("password");
    }
    if (step === "password" && passwordReady) navigate("/");
  }

  return (
    <MobileFrame className="auth-screen">
      <form
        className={`auth-content signup-content ${step === "verification" ? "verification-content" : ""}`}
        onSubmit={continueSignup}
        noValidate>
        {step !== "profile" && (
          <button
            className="back-button"
            type="button"
            onClick={() => setStep(step === "verification" ? "profile" : "verification")}
            aria-label="이전 단계로 돌아가기">
            <Icon name="arrow-back.svg" />
          </button>
        )}
        <h1>
          {step === "profile"
            ? "회원가입"
            : step === "verification"
              ? "이메일 인증"
              : "비밀번호 설정"}
        </h1>
        {step === "profile" ? (
          <div className="auth-fields signup-fields">
            <Field
              label="이름"
              icon="profile.svg"
              value={name}
              onChange={setName}
              autoComplete="name"
            />
            <Field
              label="이메일"
              icon="email.svg"
              value={email}
              onChange={setEmail}
              type="email"
              autoComplete="email"
              error={emailError}
            />
          </div>
        ) : step === "verification" ? (
          <>
            <div className="auth-fields signup-fields verification-fields">
              <Field
                label="인증코드 6자리"
                icon="email.svg"
                value={verificationCode}
                onChange={(value) => setVerificationCode(value.replace(/\D/g, ""))}
                autoComplete="one-time-code"
                inputMode="numeric"
                maxLength={6}
                error={verificationError}
              />
            </div>
            <button
              className="verification-resend"
              type="button"
              onClick={() => {
                setResent(true);
                setVerificationAttempted(false);
              }}>
              인증코드 재전송
            </button>
            {resent && (
              <p className="verification-notice" role="status">
                인증코드를 재전송했어요.
              </p>
            )}
          </>
        ) : (
          <div className="auth-fields signup-fields">
            <Field
              label="비밀번호"
              icon="password-lock.svg"
              value={password}
              onChange={setPassword}
              type="password"
              autoComplete="new-password"
              error={passwordError}
            />
            <Field
              label="비밀번호 재입력"
              icon="password-lock.svg"
              value={confirmPassword}
              onChange={setConfirmPassword}
              type="password"
              autoComplete="new-password"
              error={confirmError}
            />
          </div>
        )}
        <div className="auth-actions">
          <PrimaryButton
            type="submit"
            disabled={
              step === "profile"
                ? !profileReady
                : step === "verification"
                  ? !verificationReady
                  : !passwordReady
            }>
            {step === "profile" || step === "verification" ? "다음" : "회원가입"}
          </PrimaryButton>
          <AuthFooter
            prompt="이미 계정이 있으신요?"
            linkText="로그인 하러가기"
            to="/login"
          />
        </div>
      </form>
    </MobileFrame>
  );
}
