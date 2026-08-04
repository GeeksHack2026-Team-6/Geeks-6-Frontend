import axios from "axios";
import { API_BASE_URL } from "../constants";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5_000,
  withCredentials: true,
});

export function assertApiBaseUrl(): void {
  if (!API_BASE_URL) {
    throw new Error("VITE_API_BASE_URL is not configured.");
  }
}
