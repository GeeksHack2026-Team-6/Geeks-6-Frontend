import { API_ENDPOINTS } from "../constants";
import type { ProductHistoryResponse } from "../types";
import { apiClient, assertApiBaseUrl } from "./apiClient";

export async function getProductHistory(
  signal?: AbortSignal
): Promise<ProductHistoryResponse> {
  assertApiBaseUrl();
  const { data } = await apiClient.get<ProductHistoryResponse>(API_ENDPOINTS.history, {
    signal,
  });
  return data;
}
