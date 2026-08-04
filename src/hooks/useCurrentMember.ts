import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants";
import { getCurrentMember } from "../services";
import type { Member } from "../types";

export function useCurrentMember() {
  const navigate = useNavigate();
  const [member, setMember] = useState<Member | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function loadCurrentMember() {
      try {
        const currentMember = await getCurrentMember(controller.signal);
        setMember(currentMember);
      } catch {
        if (!controller.signal.aborted) {
          navigate(ROUTES.error, { replace: true });
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    void loadCurrentMember();
    return () => controller.abort();
  }, [navigate]);

  return { member, isLoading };
}
