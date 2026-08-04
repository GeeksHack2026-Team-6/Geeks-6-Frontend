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
  const verificationReady = /^\d{6}$/.test(verificationCode);
  const passwordReady = password.length >= 6 && password === confirmPassword;
  const emailError = email && !validEmail ? "이메일의 형식이 올바르지 않아요" : undefined;
  const passwordError =
    password && password.length < 6 ? "비밀번호는 6글자 이상이어야 해요" : undefined;
  const confirmError =
    confirmPassword && password !== confirmPassword
      ? "비밀번호가 일치하지 않아요"
      : undefined;
  const verificationError =
    verificationAttempted && !verificationReady
      ? "인증코드를 다시 확인해주세요"
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

  function continueSignup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step === "profile" && profileReady) setStep("verification");
    if (step === "verification") {
      setVerificationAttempted(true);
      if (verificationReady) setStep("password");
    }
    if (step === "password" && passwordReady) navigate(ROUTES.home);
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
              onClick={() =>
                setStep(step === "verification" ? "profile" : "verification")
              }
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
                onChange={setName}
                autoComplete="name"
              />
              <InputField
                label="이메일"
                icon="email"
                value={email}
                onChange={setEmail}
                type="email"
                autoComplete="email"
                error={emailError}
              />
            </Fields>
          ) : step === "verification" ? (
            <>
              <VerificationFields>
                <InputField
                  label="인증코드 6자리"
                  icon="email"
                  value={verificationCode}
                  onChange={(value) => setVerificationCode(value.replace(/\D/g, ""))}
                  autoComplete="one-time-code"
                  inputMode="numeric"
                  maxLength={6}
                  error={verificationError}
                />
              </VerificationFields>
              <ResendButton
                type="button"
                onClick={() => {
                  setResent(true);
                  setVerificationAttempted(false);
                }}>
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
                onChange={setPassword}
                type="password"
                autoComplete="new-password"
                error={passwordError}
              />
              <InputField
                label="비밀번호 재입력"
                icon="password-lock"
                value={confirmPassword}
                onChange={setConfirmPassword}
                type="password"
                autoComplete="new-password"
                error={confirmError}
              />
            </Fields>
          )}
          <Actions>
            <Button type="submit" disabled={!ready}>
              {step === "password" ? "회원가입" : "다음"}
            </Button>
            <AuthFooter
              prompt="이미 계정이 있으세요?"
              linkText="로그인 하러가기"
              to={ROUTES.login}
            />
          </Actions>
        </ResponsiveContent>
      </AuthForm>
    </MobileFrame>
  );
}
