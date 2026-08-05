import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "../../components/common";
import { BottomNavigation, MobileFrame } from "../../components/layout";
import { ROUTES } from "../../constants";
import { useAuth, useCurrentMember, useProductHistory } from "../../hooks";
import {
  getRecentHistoryItems,
  toConsumptionSummary,
  toPurchaseHistoryItems,
} from "../../utils";
import { AppLoadingPage } from "../AppLoading";
import {
  AllHistoryButton,
  ContentDivider,
  HistoryHeader,
  HistoryList,
  HistoryName,
  HistoryPoints,
  HistoryRow,
  HistorySection,
  MenuButton,
  MenuList,
  MyContent,
  MyDescription,
  MyHeader,
  MyScreen,
  MyTitle,
  SummaryLabel,
  SummaryList,
  SummaryRow,
  SummaryValue,
  SignoutButton,
} from "./MyPage.style";
import type { MyMenuItem } from "./MyPage.types";

const menuItems: MyMenuItem[] = [
  { label: "설정", icon: "settings" },
  { label: "이용약관", icon: "terms" },
  { label: "개인정보 처리방침", icon: "privacy" },
  { label: "문의하기", icon: "help" },
];

export function MyPage() {
  const navigate = useNavigate();
  const { isPending, signout } = useAuth();
  const { member, isLoading: isMemberLoading } = useCurrentMember();
  const { history, isLoading: isHistoryLoading } = useProductHistory();
  const [isShowingAllHistory, setIsShowingAllHistory] = useState(false);

  if (isMemberLoading || isHistoryLoading) {
    return <AppLoadingPage />;
  }

  const historyItems = getRecentHistoryItems(history);
  const consumptionSummary = toConsumptionSummary(historyItems);
  const purchaseHistory = toPurchaseHistoryItems(historyItems);
  const displayedHistory = isShowingAllHistory
    ? purchaseHistory
    : purchaseHistory.slice(0, 8);

  async function handleSignout() {
    if (await signout()) {
      navigate(ROUTES.login, { replace: true });
    }
  }

  return (
    <MobileFrame>
      <MyScreen>
        <MyContent>
          <MyHeader>
            <MyTitle>나의 소비</MyTitle>
            <MyDescription>
              {member?.username ?? "회원"}님이 확인한 친환경 상품을 살펴보세요.
            </MyDescription>
          </MyHeader>

          <SummaryList aria-label="나의 소비 요약">
            {consumptionSummary.map((item) => (
              <SummaryRow key={item.label}>
                <SummaryLabel>
                  <Icon name={item.icon} />
                  {item.label}
                </SummaryLabel>
                <SummaryValue>{item.value}</SummaryValue>
              </SummaryRow>
            ))}
          </SummaryList>

          <HistorySection aria-labelledby="recent-history-title">
            <HistoryHeader>
              <h2 id="recent-history-title">최근 확인한 상품</h2>
              {purchaseHistory.length > 8 && (
                <AllHistoryButton
                  type="button"
                  onClick={() => setIsShowingAllHistory((current) => !current)}>
                  {isShowingAllHistory ? "접기" : "전체 보기"}
                </AllHistoryButton>
              )}
            </HistoryHeader>
            <HistoryList>
              {displayedHistory.map((purchase) => (
                <HistoryRow key={purchase.id}>
                  <HistoryName>{purchase.name}</HistoryName>
                  <HistoryPoints>{purchase.carbonKg.toFixed(2)} kg CO₂e</HistoryPoints>
                </HistoryRow>
              ))}
            </HistoryList>
          </HistorySection>

          <ContentDivider />

          <MenuList aria-label="마이페이지 메뉴">
            {menuItems.map((item) => (
              <MenuButton
                key={item.label}
                type="button"
                onClick={() => window.alert(`${item.label} 페이지는 준비 중입니다.`)}>
                <Icon name={item.icon} size={20} />
                {item.label}
              </MenuButton>
            ))}
            <SignoutButton
              type="button"
              disabled={isPending}
              onClick={() => void handleSignout()}>
              {isPending ? "로그아웃 중..." : "로그아웃"}
            </SignoutButton>
          </MenuList>
        </MyContent>
        <BottomNavigation />
      </MyScreen>
    </MobileFrame>
  );
}
