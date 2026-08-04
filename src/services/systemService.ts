import { API_ENDPOINTS } from "../constants";
import { apiClient, assertApiBaseUrl } from "./apiClient";

export async function checkApiHealth(signal?: AbortSignal): Promise<void> {
  assertApiBaseUrl();
  await apiClient.get<unknown>(API_ENDPOINTS.health, { signal });
}
