import { MobileFrame } from "../../components/layout";
import { LoadingScreen } from "./AppLoadingPage.style";

export function AppLoadingPage() {
  return (
    <MobileFrame>
      <LoadingScreen role="status" aria-live="polite">
        서버 연결을 확인하고 있어요.
      </LoadingScreen>
    </MobileFrame>
  );
}
