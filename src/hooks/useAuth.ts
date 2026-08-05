import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants";
import {
  clearStoredAccessToken,
  completeSignup,
  loginMember,
  resendEmailVerification,
  setStoredAccessToken,
  signoutMember,
  signupMember,
  verifyEmail,
} from "../services";
import type {
  CompleteSignupRequest,
  LoginRequest,
  Member,
  SignupRequest,
  VerifyEmailRequest,
} from "../types";
import { getApiErrorMessage } from "../utils";

export function useAuth() {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const execute = useCallback(
    async <T>(
      request: () => Promise<T>,
      displayErrorInForm = false
    ): Promise<T | null> => {
      setIsPending(true);

      try {
        return await request();
      } catch (error) {
        if (displayErrorInForm) {
          setErrorMessage(
            getApiErrorMessage(
              error,
              "요청을 처리하지 못했습니다. 잠시 후 다시 시도해주세요."
            )
          );
        } else {
          navigate(ROUTES.error);
        }
        return null;
      } finally {
        setIsPending(false);
      }
    },
    [navigate]
  );

  const login = useCallback(
    (request: LoginRequest): Promise<Member | null> =>
      execute(async () => {
        setErrorMessage(null);
        clearStoredAccessToken();
        const member = await loginMember(request);
        setStoredAccessToken(member.accessToken);
        return member;
      }, true),
    [execute]
  );

  const beginSignup = useCallback(
    (request: SignupRequest): Promise<Member | null> =>
      execute(async () => {
        setErrorMessage(null);
        clearStoredAccessToken();
        const member = await signupMember(request);
        setStoredAccessToken(member.accessToken);
        return member;
      }, true),
    [execute]
  );

  const verifySignupEmail = useCallback(
    (request: VerifyEmailRequest): Promise<Member | null> =>
      execute(async () => {
        setErrorMessage(null);
        return verifyEmail(request);
      }, true),
    [execute]
  );

  const resendSignupEmailVerification = useCallback(
    (): Promise<void | null> =>
      execute(async () => {
        setErrorMessage(null);
        await resendEmailVerification();
      }, true),
    [execute]
  );

  const finishSignup = useCallback(
    (request: CompleteSignupRequest): Promise<Member | null> =>
      execute(async () => {
        setErrorMessage(null);
        return completeSignup(request);
      }, true),
    [execute]
  );

  const signout = useCallback(async (): Promise<boolean> => {
    const result = await execute(signoutMember);

    if (result !== null) {
      clearStoredAccessToken();
      return true;
    }

    return false;
  }, [execute]);

  const clearError = useCallback(() => {
    setErrorMessage(null);
  }, []);

  return {
    isPending,
    errorMessage,
    clearError,
    login,
    beginSignup,
    verifySignupEmail,
    resendSignupEmailVerification,
    finishSignup,
    signout,
  };
}
