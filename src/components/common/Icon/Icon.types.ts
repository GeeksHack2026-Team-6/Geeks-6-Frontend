import type { ImgHTMLAttributes } from "react";

export type IconName =
  | "arrow-back"
  | "arrow-forward"
  | "camera-scan"
  | "cart"
  | "carbon-footprint"
  | "carbon-savings"
  | "certified-company"
  | "close"
  | "email"
  | "eye-hidden"
  | "eye-visible"
  | "home"
  | "password-lock"
  | "points"
  | "points-navigation"
  | "profile"
  | "reward-points"
  | "search";

export interface IconProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  name: IconName;
  size?: number;
}
