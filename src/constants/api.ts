export const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? "")
  .trim()
  .replace(/\/+$/, "");

export const API_ENDPOINTS = {
  health: "/",
  product: {
    byBarcode: (barcodeNumber: string) => `/product/${barcodeNumber}`,
  },
  member: {
    signup: "/member/signup",
    login: "/member/login",
    signout: "/member/signout",
    me: "/member/me",
  },
} as const;
