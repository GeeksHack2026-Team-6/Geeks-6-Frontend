import arrowBack from "../../../assets/icons/arrow-back.svg";
import cameraScan from "../../../assets/icons/camera-scan.svg";
import cart from "../../../assets/icons/cart.svg";
import carbonFootprint from "../../../assets/icons/carbon-footprint.svg";
import carbonSavings from "../../../assets/icons/carbon-savings.svg";
import certifiedCompany from "../../../assets/icons/certified-company.svg";
import email from "../../../assets/icons/email.svg";
import eyeHidden from "../../../assets/icons/eye-hidden.svg";
import eyeVisible from "../../../assets/icons/eye-visible.svg";
import home from "../../../assets/icons/home.svg";
import passwordLock from "../../../assets/icons/password-lock.svg";
import points from "../../../assets/icons/points.svg";
import pointsNavigation from "../../../assets/icons/points-navigation.svg";
import profile from "../../../assets/icons/profile.svg";
import rewardPoints from "../../../assets/icons/reward-points.svg";
import search from "../../../assets/icons/search.svg";
import { IconImage } from "./Icon.style";
import type { IconName, IconProps } from "./Icon.types";

const iconSources: Record<IconName, string> = {
  "arrow-back": arrowBack,
  "camera-scan": cameraScan,
  cart,
  "carbon-footprint": carbonFootprint,
  "carbon-savings": carbonSavings,
  "certified-company": certifiedCompany,
  email,
  "eye-hidden": eyeHidden,
  "eye-visible": eyeVisible,
  home,
  "password-lock": passwordLock,
  points,
  "points-navigation": pointsNavigation,
  profile,
  "reward-points": rewardPoints,
  search,
};

export function Icon({ name, size = 24, alt = "", ...props }: IconProps) {
  return <IconImage $size={size} src={iconSources[name]} alt={alt} {...props} />;
}
