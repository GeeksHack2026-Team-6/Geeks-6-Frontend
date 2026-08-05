import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";
import {
  AuthFooter,
  AuthForm,
  Button,
  Icon,
  InputField,
  PageTitle,
} from "../../components/common";
import { MobileFrame } from "../../components/layout";
import { useAuth } from "../../hooks";
import { isValidEmail } from "../../utils";
import {
  Actions,
  BackButton,
  Fields,
  ResendButton,
  ResponsiveContent,
  Title,
  TitleWithBack,
  VerificationFields,
  VerificationNotice,
} from "./SignupPage.style";
import type { SignupStep } from "./SignupPage.types";

export function SignupPage() {
  const navigate = useNavigate();
  const {
    isPending,
    errorMessage,
    clearError,
    beginSignup,
    verifySignupEmail,
    resendSignupEmailVerification,
    finishSignup,
  } = useAuth();
  const [step, setStep] = useState<SignupStep>("profile");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verificationAttempted, setVerificationAttempted] = useState(false);
  const [resent, setResent] = useState(false);
  const validEmail = isValidEmail(email);
  const profileReady = name.trim().length > 0 && validEmail;
  const profileError = step === "profile" ? (errorMessage ?? undefined) : undefined;
  const verificationReady = /^\d{6}$/.test(verificationCode);
  const passwordReady =
    password.length >= 8 && password.length <= 72 && password === confirmPassword;
  const emailError = email && !validEmail ? "이메일 형식이 올바르지 않아요." : undefined;
  const passwordError =
    password && (password.length < 8 || password.length > 72)
      ? "비밀번호는 8자 이상 72자 이하여야 해요."
      : undefined;
  const confirmError =
    confirmPassword && password !== confirmPassword
      ? "비밀번호가 일치하지 않아요."
      : (errorMessage ?? undefined);
  const verificationError =
    verificationAttempted && !verificationReady
      ? "인증코드를 다시 확인해주세요."
      : undefined;
  const ready =
    step === "profile"
      ? profileReady
      : step === "verification"
        ? verificationReady
        : passwordReady;
  const TitleComponent = step === "profile" ? Title : TitleWithBack;
  const pageTitle =
    step === "profile"
      ? "회원가입"
      : step === "verification"
        ? "이메일 인증"
        : "비밀번호 설정";

  async function continueSignup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step === "profile" && profileReady) {
      const member = await beginSignup({ email, username: name.trim() });
      if (member) setStep("verification");
      return;
    }

    if (step === "verification") {
      setVerificationAttempted(true);
      if (verificationReady) {
        const member = await verifySignupEmail({ code: verificationCode });
        if (member) setStep("password");
      }
      return;
    }

    if (step === "password" && passwordReady) {
      const member = await finishSignup({ password });
      if (member) navigate(ROUTES.home, { replace: true });
    }
  }

  async function resendVerificationCode() {
    const result = await resendSignupEmailVerification();

    if (result !== null) {
      setResent(true);
      setVerificationAttempted(false);
    }
  }

  return (
    <MobileFrame>
      <AuthForm
        variant="signup"
        isVerification={step === "verification"}
        onSubmit={continueSignup}>
        <ResponsiveContent>
          {step !== "profile" && (
            <BackButton
              type="button"
              onClick={() => {
                clearError();
                setStep(step === "verification" ? "profile" : "verification");
              }}
              aria-label="이전 단계로 돌아가기">
              <Icon name="arrow-back" size={20} />
            </BackButton>
          )}
          <TitleComponent>
            <PageTitle>{pageTitle}</PageTitle>
          </TitleComponent>
          {step === "profile" ? (
            <Fields>
              <InputField
                label="이름"
                icon="profile"
                value={name}
                onChange={(value) => {
                  clearError();
                  setName(value);
                }}
                autoComplete="name"
              />
              <InputField
                label="이메일"
                icon="email"
                value={email}
                onChange={(value) => {
                  clearError();
                  setEmail(value);
                }}
                type="email"
                autoComplete="email"
                error={emailError ?? profileError}
              />
            </Fields>
          ) : step === "verification" ? (
            <>
              <VerificationFields>
                <InputField
                  label="인증코드 6자리"
                  icon="email"
                  value={verificationCode}
                  onChange={(value) => {
                    clearError();
                    setVerificationCode(value.replace(/\D/g, ""));
                  }}
                  autoComplete="one-time-code"
                  inputMode="numeric"
                  maxLength={6}
                  error={verificationError ?? (errorMessage ?? undefined)}
                />
              </VerificationFields>
              <ResendButton
                type="button"
                onClick={() => void resendVerificationCode()}
                disabled={isPending}>
                인증코드 재전송
              </ResendButton>
              {resent && (
                <VerificationNotice role="status">
                  인증코드를 재전송했어요.
                </VerificationNotice>
              )}
            </>
          ) : (
            <Fields>
              <InputField
                label="비밀번호"
                icon="password-lock"
                value={password}
                onChange={(value) => {
                  clearError();
                  setPassword(value);
                }}
                type="password"
                autoComplete="new-password"
                maxLength={72}
                error={passwordError}
              />
              <InputField
                label="비밀번호 재입력"
                icon="password-lock"
                value={confirmPassword}
                onChange={(value) => {
                  clearError();
                  setConfirmPassword(value);
                }}
                type="password"
                autoComplete="new-password"
                maxLength={72}
                error={confirmError}
              />
            </Fields>
          )}
          <Actions>
            <Button type="submit" disabled={!ready || isPending}>
              {step === "password" ? "회원가입" : "다음"}
            </Button>
            <AuthFooter
              prompt="이미 계정이 있으신가요?"
              linkText="로그인 하러가기"
              to={ROUTES.login}
            />
          </Actions>
        </ResponsiveContent>
      </AuthForm>
    </MobileFrame>
  );
}
