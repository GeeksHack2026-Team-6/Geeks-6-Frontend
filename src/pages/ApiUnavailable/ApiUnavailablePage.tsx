import { MobileFrame } from "../../components/layout";
import {
  ErrorBadge,
  ErrorContent,
  ErrorDescription,
  ErrorScreen,
  ErrorTitle,
  RetryButton,
} from "./ApiUnavailablePage.style";
import type { ApiUnavailablePageProps } from "./ApiUnavailablePage.types";

export function ApiUnavailablePage({ onRetry }: ApiUnavailablePageProps) {
  return (
    <MobileFrame>
      <ErrorScreen>
        <ErrorContent>
          <ErrorBadge aria-hidden="true">!</ErrorBadge>
          <div>
            <ErrorTitle>서버에 연결할 수 없어요</ErrorTitle>
            <ErrorDescription>
              잠시 후 다시 시도해 주세요. 문제가 계속되면 관리자에게 문의해 주세요.
            </ErrorDescription>
          </div>
          <RetryButton type="button" onClick={onRetry}>
            다시 시도
          </RetryButton>
        </ErrorContent>
      </ErrorScreen>
    </MobileFrame>
  );
}
