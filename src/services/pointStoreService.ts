import { API_ENDPOINTS } from "../constants";
import type { PointStoreProduct } from "../types";
import { apiClient, assertApiBaseUrl } from "./apiClient";

export async function getPointStoreProducts(
  signal?: AbortSignal
): Promise<PointStoreProduct[]> {
  assertApiBaseUrl();
  const { data } = await apiClient.get<PointStoreProduct[]>(
    API_ENDPOINTS.pointStore.products,
    { signal }
  );
  return data;
}
