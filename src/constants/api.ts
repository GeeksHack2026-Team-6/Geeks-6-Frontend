export const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? "")
  .trim()
  .replace(/\/+$/, "");

export const API_ENDPOINTS = {
  health: "/",
  product: {
    byBarcode: (barcodeNumber: string) => `/product/${barcodeNumber}`,
    receipt: "/product/receipt",
  },
  history: "/history",
  pointStore: {
    products: "/points/store",
  },
  member: {
    signup: "/member/signup",
    verifyEmail: "/member/verify_email",
    resendEmailVerification: "/member/verify_email/resend",
    completeSignup: "/member/complete_signup",
    login: "/member/login",
    token: "/member/token",
    signout: "/member/signout",
    me: "/member/me",
    points: "/member/points",
  },
} as const;
