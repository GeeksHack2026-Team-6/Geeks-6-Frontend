import cuVoucher from "../../assets/images/cu-voucher.png";
import daisoVoucher from "../../assets/images/daiso-voucher.png";
import gs25Voucher from "../../assets/images/gs25-voucher.png";
import { RewardProductCard } from "../../components/points";
import type { RewardProduct } from "../../components/points";
import { BottomNavigation, MobileFrame } from "../../components/layout";
import {
  Content,
  Description,
  Header,
  PointLabel,
  PointSummary,
  PointValue,
  PointsScreen,
  ProductList,
  ProductSection,
  SectionDescription,
  SectionHeader,
  SectionTitle,
  Title,
} from "./PointsPage.style";

const currentPoints = 1234;

const rewardProducts: RewardProduct[] = [
  {
    id: "cu-5000",
    name: "CU 편의점 5천원권",
    points: 700,
    image: cuVoucher,
    imageAlt: "CU 로고",
    brand: "cu",
  },
  {
    id: "daiso-5000",
    name: "다이소 상품권 5천원권",
    points: 500,
    image: daisoVoucher,
    imageAlt: "다이소 로고",
    brand: "daiso",
  },
  {
    id: "gs25-30000",
    name: "GS25 상품권 3만원권",
    points: 3000,
    image: gs25Voucher,
    imageAlt: "GS25 로고",
    brand: "gs25",
  },
  {
    id: "daiso-1000",
    name: "다이소 상품권 1천원권",
    points: 150,
    image: daisoVoucher,
    imageAlt: "다이소 로고",
    brand: "daiso",
  },
  {
    id: "cu-5000-secondary",
    name: "CU 편의점 5천원권",
    points: 700,
    image: cuVoucher,
    imageAlt: "CU 로고",
    brand: "cu",
  },
];

export function PointsPage() {
  return (
    <MobileFrame>
      <PointsScreen>
        <Content>
          <Header>
            <Title>포인트</Title>
            <Description>
              탄소발자국을 줄이는 소비를 해주셔서 드리는 포인트예요
            </Description>
          </Header>
          <PointSummary
            aria-label={`나의 포인트 ${currentPoints.toLocaleString()} 포인트`}>
            <PointLabel>나의 포인트</PointLabel>
            <PointValue>{currentPoints.toLocaleString()} P</PointValue>
          </PointSummary>
          <ProductSection aria-labelledby="reward-products-title">
            <SectionHeader>
              <SectionTitle id="reward-products-title">구매 상품</SectionTitle>
              <SectionDescription>
                모은 포인트로 구매할 수 있는 상품이에요
              </SectionDescription>
            </SectionHeader>
            <ProductList>
              {rewardProducts.map((product) => (
                <RewardProductCard
                  key={product.id}
                  product={product}
                  available={currentPoints >= product.points}
                />
              ))}
            </ProductList>
          </ProductSection>
        </Content>
        <BottomNavigation />
      </PointsScreen>
    </MobileFrame>
  );
}
