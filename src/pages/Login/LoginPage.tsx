import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";
import {
  AuthFooter,
  AuthForm,
  BrandLogo,
  Button,
  InputField,
  PageTitle,
} from "../../components/common";
import { MobileFrame } from "../../components/layout";
import { isValidEmail } from "../../utils";
import {
  Actions,
  Fields,
  ForgotPasswordButton,
  LoginBrand,
  LoginContent,
  LoginTitle,
} from "./LoginPage.style";

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ready = isValidEmail(email) && password.length >= 6;
  const emailError =
    submitted && !isValidEmail(email) ? "이메일 형식을 확인해주세요" : undefined;
  const passwordError =
    submitted && password.length < 6 ? "비밀번호는 6글자 이상이어야 해요" : undefined;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    if (ready) navigate(ROUTES.home);
  }

  return (
    <MobileFrame>
      <AuthForm variant="login" onSubmit={handleSubmit}>
        <LoginContent>
          <LoginBrand>
            <BrandLogo />
          </LoginBrand>
          <LoginTitle>
            <PageTitle>로그인</PageTitle>
          </LoginTitle>
          <Fields>
            <InputField
              label="이메일"
              icon="email"
              value={email}
              onChange={setEmail}
              type="email"
              autoComplete="email"
              error={emailError}
            />
            <InputField
              label="비밀번호"
              icon="password-lock"
              value={password}
              onChange={setPassword}
              type="password"
              autoComplete="current-password"
              error={passwordError}
            />
          </Fields>
          <ForgotPasswordButton
            type="button"
            onClick={() => window.alert("비밀번호 찾기 기능은 준비 중입니다.")}>
            비밀번호를 잊으셨나요?
          </ForgotPasswordButton>
          <Actions>
            <Button type="submit" disabled={!ready}>
              로그인
            </Button>
            <AuthFooter
              prompt="아직 회원이 아니신가요?"
              linkText="회원가입 하러가기"
              to={ROUTES.signup}
            />
          </Actions>
        </LoginContent>
      </AuthForm>
    </MobileFrame>
  );
}
