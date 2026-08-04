import { API_ENDPOINTS } from "../constants";
import type { BarcodeProductResponse } from "../types";
import { apiClient, assertApiBaseUrl } from "./apiClient";

export async function getProductByBarcode(
  barcodeNumber: string,
  signal?: AbortSignal
): Promise<BarcodeProductResponse> {
  assertApiBaseUrl();
  const { data } = await apiClient.get<BarcodeProductResponse>(
    API_ENDPOINTS.product.byBarcode(barcodeNumber),
    { signal }
  );
  return data;
}
