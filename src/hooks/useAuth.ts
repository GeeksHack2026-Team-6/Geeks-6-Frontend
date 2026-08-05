import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants";
import {
  clearStoredAccessToken,
  getMemberAccessToken,
  loginMember,
  setStoredAccessToken,
  signoutMember,
  signupMember,
} from "../services";
import type { LoginRequest, Member, SignupRequest } from "../types";
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

  const signup = useCallback(
    (request: SignupRequest): Promise<Member | null> =>
      execute(async () => {
        setErrorMessage(null);
        clearStoredAccessToken();
        const member = await signupMember(request);
        setStoredAccessToken(await getMemberAccessToken());
        return member;
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

  return { isPending, errorMessage, clearError, login, signup, signout };
}
