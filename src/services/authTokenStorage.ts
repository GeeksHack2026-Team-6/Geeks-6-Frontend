import { STORAGE_KEYS } from "../constants";

export function getStoredAccessToken(): string | null {
  if (typeof window === "undefined") {
    return null;
  }

  const accessToken = window.localStorage.getItem(STORAGE_KEYS.accessToken)?.trim();
  return accessToken || null;
}

export function setStoredAccessToken(accessToken: string): void {
  const normalizedAccessToken = accessToken.trim();

  if (!normalizedAccessToken) {
    throw new Error("The member access token is missing.");
  }

  window.localStorage.setItem(STORAGE_KEYS.accessToken, normalizedAccessToken);
}

export function clearStoredAccessToken(): void {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(STORAGE_KEYS.accessToken);
  }
}
