import { BottomNavigation } from "../components/home/BottomNavigation";
import { ProductSection, SummaryCard } from "../components/home/HomeCards";
import type { ProductCardData } from "../components/home/HomeCards";
import { MobileFrame } from "../components/MobileFrame";

const foodCards: ProductCardData[] = [
  {
    name: "홈런볼",
    carbon: "0.82",
    percentage: "20",
    points: "50",
    image: "/images/home-run-ball.jpg",
  },
  {
    name: "미스터비스터 피스터...",
    carbon: "0.95",
    percentage: "38",
    points: "70",
    image: "/images/mister-bister.jpg",
  },
  {
    name: "몬스터",
    carbon: "0.41",
    percentage: "8",
    points: "20",
    image: "/images/monster.jpg",
  },
];

const productCards: ProductCardData[] = [
  {
    name: "에코백",
    carbon: "0.95",
    percentage: "38",
    points: "70",
    image: "/images/eco-bag.png",
  },
  { name: "고체비누", carbon: "0.41", percentage: "8", points: "20" },
  {
    name: "텀블러",
    carbon: "0.82",
    percentage: "20",
    points: "50",
    image: "/images/tumbler.jpg",
  },
];

const user = {
  name: "김현수",
  carbon: "1.24",
  points: "120",
};

export function HomePage() {
  return (
    <MobileFrame className="home-screen">
      <div className="home-content">
        <h1>
          안녕하세요, {user.name} 님<br />
          오늘도 현명한 소비를 위해 노력해보아요
        </h1>
        <section className="summary-section" aria-labelledby="summary-heading">
          <h2 id="summary-heading">오늘의 소비 요약</h2>
          <div className="summary-grid">
            <SummaryCard
              type="탄소 절감"
              value={`${user.carbon}kg`}
              label="오늘 내가 절감시킨 탄소"
              icon="carbon-savings.svg"
            />
            <SummaryCard
              type="포인트"
              value={`${user.points}P`}
              label="오늘 적립된 포인트"
              icon="reward-points.svg"
            />
          </div>
        </section>
        <ProductSection title="최근 확인한 음식" cards={foodCards} />
        <ProductSection title="최근 확인한 상품" cards={productCards} />
      </div>
      <BottomNavigation />
    </MobileFrame>
  );
}
