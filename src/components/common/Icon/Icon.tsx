import arrowBack from "../../../assets/icons/arrow-back.svg";
import arrowForward from "../../../assets/icons/arrow-forward.svg";
import cameraScan from "../../../assets/icons/camera-scan.svg";
import carbonReduction from "../../../assets/icons/carbon-reduction.svg";
import cart from "../../../assets/icons/cart.svg";
import carbonFootprint from "../../../assets/icons/carbon-footprint.svg";
import carbonSavings from "../../../assets/icons/carbon-savings.svg";
import certifiedCompany from "../../../assets/icons/certified-company.svg";
import close from "../../../assets/icons/close.svg";
import deleteIcon from "../../../assets/icons/delete.svg";
import email from "../../../assets/icons/email.svg";
import eyeHidden from "../../../assets/icons/eye-hidden.svg";
import eyeVisible from "../../../assets/icons/eye-visible.svg";
import help from "../../../assets/icons/help.svg";
import home from "../../../assets/icons/home.svg";
import passwordLock from "../../../assets/icons/password-lock.svg";
import points from "../../../assets/icons/points.svg";
import pointsNavigation from "../../../assets/icons/points-navigation.svg";
import privacy from "../../../assets/icons/privacy.svg";
import profile from "../../../assets/icons/profile.svg";
import purchaseVerification from "../../../assets/icons/purchase-verification.svg";
import receipt from "../../../assets/icons/receipt.svg";
import responsibleConsumption from "../../../assets/icons/responsible-consumption.svg";
import rewardPoints from "../../../assets/icons/reward-points.svg";
import search from "../../../assets/icons/search.svg";
import settings from "../../../assets/icons/settings.svg";
import terms from "../../../assets/icons/terms.svg";
import { IconImage } from "./Icon.style";
import type { IconName, IconProps } from "./Icon.types";

const iconSources: Record<IconName, string> = {
  "arrow-back": arrowBack,
  "arrow-forward": arrowForward,
  "camera-scan": cameraScan,
  "carbon-reduction": carbonReduction,
  cart,
  "carbon-footprint": carbonFootprint,
  "carbon-savings": carbonSavings,
  "certified-company": certifiedCompany,
  close,
  delete: deleteIcon,
  email,
  "eye-hidden": eyeHidden,
  "eye-visible": eyeVisible,
  help,
  home,
  "password-lock": passwordLock,
  points,
  "points-navigation": pointsNavigation,
  privacy,
  profile,
  "purchase-verification": purchaseVerification,
  receipt,
  "responsible-consumption": responsibleConsumption,
  "reward-points": rewardPoints,
  search,
  settings,
  terms,
};

export function Icon({ name, size = 24, alt = "", ...props }: IconProps) {
  return <IconImage $size={size} src={iconSources[name]} alt={alt} {...props} />;
}
