import type { ImgHTMLAttributes } from "react";

export type IconName =
  | "arrow-back"
  | "arrow-forward"
  | "camera-scan"
  | "carbon-reduction"
  | "cart"
  | "carbon-footprint"
  | "carbon-savings"
  | "certified-company"
  | "close"
  | "delete"
  | "email"
  | "eye-hidden"
  | "eye-visible"
  | "help"
  | "home"
  | "password-lock"
  | "points"
  | "points-navigation"
  | "privacy"
  | "profile"
  | "purchase-verification"
  | "receipt"
  | "responsible-consumption"
  | "reward-points"
  | "search"
  | "settings"
  | "terms";

export interface IconProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  name: IconName;
  size?: number;
}
