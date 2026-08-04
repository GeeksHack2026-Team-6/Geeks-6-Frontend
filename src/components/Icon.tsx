const ICON_PATH = "/icon/";

export type IconName =
  | "arrow-back.svg"
  | "camera-scan.svg"
  | "carbon-footprint.svg"
  | "carbon-savings.svg"
  | "certified-company.svg"
  | "email.svg"
  | "eye-hidden.svg"
  | "eye-visible.svg"
  | "home.svg"
  | "password-lock.svg"
  | "points.svg"
  | "profile.svg"
  | "reward-points.svg"
  | "search.svg";

interface IconProps {
  name: IconName;
  alt?: string;
  className?: string;
}

export function Icon({ name, alt = "", className }: IconProps) {
  return <img className={className} src={`${ICON_PATH}${name}`} alt={alt} />;
}
