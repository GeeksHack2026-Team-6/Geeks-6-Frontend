import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants";
import { getProductByBarcode } from "../services";
import type { ProductAnalysisData } from "../pages/ProductAnalysis/ProductAnalysisPage.types";
import { toProductAnalysisData } from "../utils";

export function useProductByBarcode(barcode?: string) {
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductAnalysisData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function loadProduct() {
      if (!barcode) {
        navigate(ROUTES.error, { replace: true });
        return;
      }

      try {
        const response = await getProductByBarcode(barcode, controller.signal);
        setProduct(toProductAnalysisData(response));
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

    void loadProduct();
    return () => controller.abort();
  }, [barcode, navigate]);

  return { product, isLoading };
}
