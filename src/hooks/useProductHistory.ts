import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants";
import { getProductHistory } from "../services";
import type { ProductHistoryResponse } from "../types";

export function useProductHistory() {
  const navigate = useNavigate();
  const [history, setHistory] = useState<ProductHistoryResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function loadHistory() {
      try {
        setHistory(await getProductHistory(controller.signal));
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

    void loadHistory();
    return () => controller.abort();
  }, [navigate]);

  return { history, isLoading };
}
