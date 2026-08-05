import { isAxiosError } from "axios";

function getMessageFromResponse(data: unknown): string | null {
  if (typeof data === "string") {
    return data;
  }

  if (typeof data !== "object" || data === null || !("message" in data)) {
    return null;
  }

  const { message } = data;

  if (typeof message === "string") {
    return message;
  }

  if (Array.isArray(message) && message.every((item) => typeof item === "string")) {
    return message.join(" ");
  }

  return null;
}

export function getApiErrorMessage(error: unknown, fallbackMessage: string): string {
  if (!isAxiosError(error)) {
    return fallbackMessage;
  }

  return getMessageFromResponse(error.response?.data) ?? fallbackMessage;
}
