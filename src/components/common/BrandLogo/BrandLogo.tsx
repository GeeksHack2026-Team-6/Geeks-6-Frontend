import { LogoText } from "./BrandLogo.style";
import type { BrandLogoProps } from "./BrandLogo.types";

export function BrandLogo({ children = "GreenPick" }: BrandLogoProps) {
  return <LogoText>{children}</LogoText>;
}
