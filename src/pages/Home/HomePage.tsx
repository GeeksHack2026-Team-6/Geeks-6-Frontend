import ecoBag from "../../assets/images/eco-bag.png";
import homeRunBall from "../../assets/images/home-run-ball.jpg";
import misterBister from "../../assets/images/mister-bister.jpg";
import monster from "../../assets/images/monster.jpg";
import tumbler from "../../assets/images/tumbler.jpg";
import { PageTitle } from "../../components/common";
import { ProductSection, SummaryCard } from "../../components/home";
import type { ProductCardData } from "../../components/home";
import { BottomNavigation, MobileFrame } from "../../components/layout";
import { useCurrentMember } from "../../hooks";
import {
  Content,
  HomeHeading,
  HomeScreen,
  SummaryGrid,
  SummarySection,
} from "./HomePage.style";

const foodCards: ProductCardData[] = [
  { name: "홈런볼", carbon: "0.82", percentage: "20", points: "50", image: homeRunBall },
  {
    name: "미스터비스터 아이스크림",
    carbon: "0.95",
    percentage: "38",
    points: "70",
    image: misterBister,
  },
  { name: "몬스터", carbon: "0.41", percentage: "8", points: "20", image: monster },
];
const productCards: ProductCardData[] = [
  { name: "에코백", carbon: "0.95", percentage: "38", points: "70", image: ecoBag },
  { name: "고체비누", carbon: "0.41", percentage: "8", points: "20" },
  { name: "텀블러", carbon: "0.82", percentage: "20", points: "50", image: tumbler },
];
const dailyCarbonReduction = "1.24";

export function HomePage() {
  const { member } = useCurrentMember();

  return (
    <MobileFrame>
      <HomeScreen>
        <Content>
          <HomeHeading>
            <PageTitle size="home">
              안녕하세요, {member?.username ?? ""} 님<br />
              오늘도 환경을 지키기 위해 노력해보세요
            </PageTitle>
          </HomeHeading>
          <SummarySection aria-labelledby="summary-heading">
            <PageTitle as="h2" size="section" id="summary-heading">
              오늘의 탄소 발자국 요약
            </PageTitle>
            <SummaryGrid>
              <SummaryCard
                type="탄소 절감"
                value={`${dailyCarbonReduction}kg`}
                label="오늘 내가 절감한 탄소"
                icon="carbon-savings"
              />
              <SummaryCard
                type="포인트"
                value={member ? `${member.points}P` : "..."}
                label="오늘 적립한 포인트"
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
