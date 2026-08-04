import { useCallback, useEffect, useState } from "react";
import { checkApiHealth } from "../services";

export type ApiHealthStatus = "checking" | "available" | "unavailable";

export function useApiHealth() {
  const [status, setStatus] = useState<ApiHealthStatus>("checking");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function verifyApiHealth() {
      setStatus("checking");

      try {
        await checkApiHealth(controller.signal);
        setStatus("available");
      } catch {
        if (!controller.signal.aborted) {
          setStatus("unavailable");
        }
      }
    }

    void verifyApiHealth();
    return () => controller.abort();
  }, [attempt]);

  const retry = useCallback(() => {
    setAttempt((currentAttempt) => currentAttempt + 1);
  }, []);

  return { status, retry };
}
