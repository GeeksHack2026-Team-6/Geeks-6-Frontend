import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants";
import { getPointStoreProducts } from "../services";
import type { PointStoreProduct } from "../types";

export function usePointStoreProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<PointStoreProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function loadProducts() {
      try {
        setProducts(await getPointStoreProducts(controller.signal));
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

    void loadProducts();
    return () => controller.abort();
  }, [navigate]);

  return { products, isLoading };
}
