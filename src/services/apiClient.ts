import axios from "axios";
import { API_BASE_URL, API_ENDPOINTS } from "../constants";
import { getStoredAccessToken } from "./authTokenStorage";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5_000,
  withCredentials: true,
});

const unauthenticatedEndpoints = new Set([
  API_ENDPOINTS.member.signup,
  API_ENDPOINTS.member.login,
]);

apiClient.interceptors.request.use((config) => {
  const requestUrl = config.url ?? "";
  const isUnauthenticatedEndpoint = [...unauthenticatedEndpoints].some(
    (endpoint) => requestUrl === endpoint || requestUrl.endsWith(endpoint)
  );

  if (!isUnauthenticatedEndpoint) {
    const accessToken = getStoredAccessToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }

  return config;
});

export function assertApiBaseUrl(): void {
  if (!API_BASE_URL) {
    throw new Error("VITE_API_BASE_URL is not configured.");
  }
}
