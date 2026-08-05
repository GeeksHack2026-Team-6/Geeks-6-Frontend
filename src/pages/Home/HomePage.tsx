import { PageTitle } from "../../components/common";
import { ProductSection, SummaryCard } from "../../components/home";
import { BottomNavigation, MobileFrame } from "../../components/layout";
import { useCurrentMember, useProductHistory } from "../../hooks";
import {
  getRecentHistoryItems,
  getTotalCarbonReductionKg,
  toProductCardData,
} from "../../utils";
import { AppLoadingPage } from "../AppLoading";
import {
  Content,
  HomeHeading,
  HomeScreen,
  SummaryGrid,
  SummarySection,
} from "./HomePage.style";

export function HomePage() {
  const { member, isLoading: isMemberLoading } = useCurrentMember();
  const { history, isLoading: isHistoryLoading } = useProductHistory();

  if (isMemberLoading || isHistoryLoading) {
    return <AppLoadingPage />;
  }

  const foodCards = (history?.food ?? []).map(toProductCardData);
  const productCards = (history?.product ?? []).map(toProductCardData);
  const totalCarbonReductionKg = getTotalCarbonReductionKg(
    getRecentHistoryItems(history)
  );

  return (
    <MobileFrame>
      <HomeScreen>
        <Content>
          <HomeHeading>
            <PageTitle size="home">
              안녕하세요, {member?.username ?? "회원"}님
              <br />
              오늘도 환경을 지키기 위해 노력해보아요
            </PageTitle>
          </HomeHeading>
          <SummarySection aria-labelledby="summary-heading">
            <PageTitle as="h2" size="section" id="summary-heading">
              나의 탄소 발자국 요약
            </PageTitle>
            <SummaryGrid>
              <SummaryCard
                type="탄소 절감"
                value={`${totalCarbonReductionKg.toFixed(2)}kg`}
                label="조회한 상품 기준 절감 탄소"
                icon="carbon-savings"
              />
              <SummaryCard
                type="포인트"
                value={`${member?.points.toLocaleString() ?? 0}P`}
                label="현재 보유 포인트"
                icon="reward-points"
              />
            </SummaryGrid>
          </SummarySection>
          <ProductSection title="최근 확인한 음식" cards={foodCards} />
          <ProductSection title="최근 확인한 상품" cards={productCards} />
        </Content>
        <BottomNavigation />
      </HomeScreen>
    </MobileFrame>
  );
}
