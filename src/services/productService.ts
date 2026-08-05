import { API_ENDPOINTS } from "../constants";
import type { BarcodeProductResponse, ReceiptProductResponse } from "../types";
import { apiClient, assertApiBaseUrl } from "./apiClient";

export async function getProductByBarcode(
  barcodeNumber: string,
  signal?: AbortSignal
): Promise<BarcodeProductResponse> {
  assertApiBaseUrl();
  const { data } = await apiClient.get<BarcodeProductResponse>(
    API_ENDPOINTS.product.byBarcode(barcodeNumber),
    {
      signal,
      timeout: 120_000,
    }
  );
  return data;
}

export async function getProductsByReceipt(
  file: File
): Promise<ReceiptProductResponse[]> {
  assertApiBaseUrl();

  const formData = new FormData();
  formData.append("file", file);

  const { data } = await apiClient.post<ReceiptProductResponse[]>(
    API_ENDPOINTS.product.receipt,
    formData,
    { timeout: 120_000 }
  );
  return data;
}
