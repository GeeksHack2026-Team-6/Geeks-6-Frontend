import { Device, Viewport } from "./MobileFrame.style";
import type { MobileFrameProps } from "./MobileFrame.types";

export function MobileFrame({ children }: MobileFrameProps) {
  return (
    <Viewport>
      <Device>{children}</Device>
    </Viewport>
  );
}
