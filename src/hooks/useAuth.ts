import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants";
import { loginMember, signoutMember, signupMember } from "../services";
import type { LoginRequest, Member, SignupRequest } from "../types";

export function useAuth() {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);

  const execute = useCallback(
    async <T>(request: () => Promise<T>): Promise<T | null> => {
      setIsPending(true);

      try {
        return await request();
      } catch {
        navigate(ROUTES.error);
        return null;
      } finally {
        setIsPending(false);
      }
    },
    [navigate]
  );

  const login = useCallback(
    (request: LoginRequest): Promise<Member | null> =>
      execute(() => loginMember(request)),
    [execute]
  );

  const signup = useCallback(
    (request: SignupRequest): Promise<Member | null> =>
      execute(() => signupMember(request)),
    [execute]
  );

  const signout = useCallback(async (): Promise<boolean> => {
    const result = await execute(signoutMember);
    return result !== null;
  }, [execute]);

  return { isPending, login, signup, signout };
}
