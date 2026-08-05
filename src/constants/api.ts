export const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? "")
  .trim()
  .replace(/\/+$/, "");

export const API_ENDPOINTS = {
  health: "/",
  product: {
    byBarcode: (barcodeNumber: string) => `/product/${barcodeNumber}`,
  },
  history: "/history",
  pointStore: {
    products: "/points/store",
  },
  member: {
    signup: "/member/signup",
    login: "/member/login",
    token: "/member/token",
    signout: "/member/signout",
    me: "/member/me",
  },
} as const;
