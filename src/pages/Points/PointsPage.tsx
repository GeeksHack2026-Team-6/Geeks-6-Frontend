import { RewardProductCard } from "../../components/points";
import type { RewardProduct } from "../../components/points";
import { BottomNavigation, MobileFrame } from "../../components/layout";
import { useCurrentMember, usePointStoreProducts } from "../../hooks";
import { AppLoadingPage } from "../AppLoading";
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

export function PointsPage() {
  const { member, isLoading: isMemberLoading } = useCurrentMember();
  const { products, isLoading: isProductsLoading } = usePointStoreProducts();

  if (isMemberLoading || isProductsLoading) {
    return <AppLoadingPage />;
  }

  const currentPoints = member?.points ?? 0;
  const rewardProducts: RewardProduct[] = products.map((product) => ({
    id: product.id,
    name: product.name,
    pointPrice: product.point_price,
    imageUrl: product.image_url,
    imageAlt: `${product.name} 이미지`,
  }));

  return (
    <MobileFrame>
      <PointsScreen>
        <Content>
          <Header>
            <Title>포인트</Title>
            <Description>
              탄소발자국을 줄이는 소비를 해주셔서 드리는 포인트예요.
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
                모은 포인트로 구매할 수 있는 상품이에요.
              </SectionDescription>
            </SectionHeader>
            <ProductList>
              {rewardProducts.map((product) => (
                <RewardProductCard
                  key={product.id}
                  product={product}
                  available={currentPoints >= product.pointPrice}
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
