import homeRunBall from "../../assets/images/home-run-ball-analysis.png";
import { Icon } from "../../components/common";
import { MobileFrame } from "../../components/layout";
import { ROUTES } from "../../constants";
import {
  AnalysisContent,
  AnalysisScreen,
  BackButton,
  CarbonCard,
  CarbonComparison,
  CarbonHeader,
  CarbonValue,
  CartButton,
  ComparisonBar,
  ComparisonLabels,
  EsDetailButton,
  EsgCard,
  EsgDescription,
  EsgStatus,
  Header,
  PageHeading,
  ProductBrand,
  ProductImage,
  ProductImageCard,
  ProductInfo,
  ProductMeta,
  ProductName,
  RewardBadge,
  Section,
  SectionTitle,
} from "./ProductAnalysisPage.style";
import type { ProductAnalysisData } from "./ProductAnalysisPage.types";
import { useNavigate } from "react-router-dom";

const product: ProductAnalysisData = {
  name: "홈런볼",
  brand: "해태",
  carbonKg: 0.82,
  reductionPercentage: 20,
  rewardPoints: 50,
  esgRating: "우수",
  esgDescription: "환경, 사회, 지배구조, 모두 좋은 평가를 받고 있는 기업이에요",
};

export function ProductAnalysisPage() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <AnalysisScreen>
        <Header>
          <BackButton
            type="button"
            aria-label="이전 페이지로 이동"
            onClick={() => navigate(ROUTES.scan)}>
            <Icon name="arrow-back" />
          </BackButton>
          <PageHeading>상품 분석</PageHeading>
        </Header>

        <AnalysisContent>
          <ProductImageCard>
            <ProductImage src={homeRunBall} alt={`${product.brand} ${product.name}`} />
          </ProductImageCard>

          <ProductInfo>
            <ProductMeta>
              <ProductName>{product.name}</ProductName>
              <ProductBrand>{product.brand}</ProductBrand>
            </ProductMeta>
            <RewardBadge>
              구매 시<br />+{product.rewardPoints}P
            </RewardBadge>
          </ProductInfo>

          <Section aria-labelledby="carbon-title">
            <SectionTitle id="carbon-title">탄소발자국</SectionTitle>
            <CarbonCard>
              <CarbonHeader>
                <Icon name="carbon-footprint" size={20} />
                <CarbonValue>{product.carbonKg.toFixed(2)} kg CO₂e</CarbonValue>
              </CarbonHeader>
              <CarbonComparison>
                평균보다 <strong>{product.reductionPercentage}%</strong> 낮아요
              </CarbonComparison>
              <ComparisonBar aria-hidden="true">
                <span />
                <i />
                <b />
              </ComparisonBar>
              <ComparisonLabels>
                <span>이 상품</span>
                <span>평균</span>
              </ComparisonLabels>
            </CarbonCard>
          </Section>

          <Section aria-labelledby="esg-title">
            <SectionTitle id="esg-title">ESG 경영</SectionTitle>
            <EsgCard>
              <EsgStatus>
                <span />
                {product.esgRating}
              </EsgStatus>
              <EsgDescription>{product.esgDescription}</EsgDescription>
              <EsDetailButton type="button">자세히 보기</EsDetailButton>
            </EsgCard>
          </Section>

          <CartButton
            type="button"
            onClick={() => window.alert("장바구니에 상품을 담았습니다.")}>
            장바구니 담기
          </CartButton>
        </AnalysisContent>
      </AnalysisScreen>
    </MobileFrame>
  );
}
