import type { ImgHTMLAttributes } from "react";

export type IconName =
  | "arrow-back"
  | "camera-scan"
  | "cart"
  | "carbon-footprint"
  | "carbon-savings"
  | "certified-company"
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
