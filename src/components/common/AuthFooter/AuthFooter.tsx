import { Footer, FooterLink } from "./AuthFooter.style";
import type { AuthFooterProps } from "./AuthFooter.types";

export function AuthFooter({ prompt, linkText, to }: AuthFooterProps) {
  return (
    <Footer>
      {prompt} <FooterLink to={to}>{linkText}</FooterLink>
    </Footer>
  );
}
