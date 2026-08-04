import { useNavigate } from "react-router-dom";
import { MobileFrame } from "../../components/layout";
import {
  ErrorBadge,
  ErrorContent,
  ErrorDescription,
  ErrorScreen,
  ErrorTitle,
  RetryButton,
} from "../ApiUnavailable/ApiUnavailablePage.style";

export function ApiRequestErrorPage() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <ErrorScreen>
        <ErrorContent>
          <ErrorBadge aria-hidden="true">!</ErrorBadge>
          <div>
            <ErrorTitle>요청을 처리할 수 없어요</ErrorTitle>
            <ErrorDescription>입력 정보를 확인한 뒤 다시 시도해 주세요.</ErrorDescription>
          </div>
          <RetryButton type="button" onClick={() => navigate(-1)}>
            이전 화면으로
          </RetryButton>
        </ErrorContent>
      </ErrorScreen>
    </MobileFrame>
  );
}
