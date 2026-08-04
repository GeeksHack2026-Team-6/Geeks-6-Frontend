import { Icon } from "../../components/common";
import { BottomNavigation, MobileFrame } from "../../components/layout";
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
} from "./MyPage.style";
import type {
  ConsumptionSummaryItem,
  MyMenuItem,
  PurchaseHistoryItem,
} from "./MyPage.types";

const userName = "정우진";

const consumptionSummary: ConsumptionSummaryItem[] = [
  { label: "내가 책임 소비한 상품", value: "17개", icon: "responsible-consumption" },
  { label: "내가 인증한 구매", value: "9건", icon: "purchase-verification" },
  { label: "지금까지 내가 절감시킨 탄소", value: "77kg", icon: "carbon-reduction" },
];

const purchaseHistory: PurchaseHistoryItem[] = [
  { id: "eco-bag", name: "에코백", points: 50 },
  { id: "soap-1", name: "고체비누", points: 140 },
  { id: "fair-trade-chocolate-1", name: "공정무역 초콜릿", points: 320 },
  { id: "tumbler-1", name: "텀블러", points: 280 },
  { id: "soap-2", name: "고체비누", points: 140 },
  { id: "home-run-ball", name: "홈런볼", points: 40 },
  { id: "tumbler-2", name: "텀블러", points: 280 },
  { id: "fair-trade-chocolate-2", name: "공정무역 초콜릿", points: 320 },
];

const menuItems: MyMenuItem[] = [
  { label: "설정", icon: "settings" },
  { label: "이용약관", icon: "terms" },
  { label: "개인정보 처리방침", icon: "privacy" },
  { label: "도움말", icon: "help" },
];

export function MyPage() {
  return (
    <MobileFrame>
      <MyScreen>
        <MyContent>
          <MyHeader>
            <MyTitle>나의 소비</MyTitle>
            <MyDescription>
              {userName} 님이 만들어온 현명한 선택들을 확인해보세요
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

          <HistorySection aria-labelledby="recent-purchase-title">
            <HistoryHeader>
              <h2 id="recent-purchase-title">최근 구매 인증</h2>
              <AllHistoryButton
                type="button"
                onClick={() => window.alert("전체 구매 인증 내역은 준비 중입니다.")}>
                전체 보기
              </AllHistoryButton>
            </HistoryHeader>
            <HistoryList>
              {purchaseHistory.map((purchase) => (
                <HistoryRow key={purchase.id}>
                  <HistoryName>{purchase.name}</HistoryName>
                  <HistoryPoints>+ {purchase.points}P</HistoryPoints>
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
          </MenuList>
        </MyContent>
        <BottomNavigation />
      </MyScreen>
    </MobileFrame>
  );
}
