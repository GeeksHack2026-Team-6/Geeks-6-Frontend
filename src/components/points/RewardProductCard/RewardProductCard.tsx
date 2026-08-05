import {
  Availability,
  Card,
  ImageFrame,
  ProductInfo,
  ProductMeta,
  ProductName,
  ProductPoints,
} from "./RewardProductCard.style";
import type { RewardProductCardProps } from "./RewardProductCard.types";

export function RewardProductCard({ product, available }: RewardProductCardProps) {
  return (
    <Card>
      <ImageFrame>
        <img src={product.imageUrl} alt={product.imageAlt} />
      </ImageFrame>
      <ProductInfo>
        <ProductMeta>
          <ProductName title={product.name}>{product.name}</ProductName>
          <ProductPoints>{product.pointPrice.toLocaleString()} P</ProductPoints>
        </ProductMeta>
        <Availability $available={available}>
          구매할 수 {available ? "있는" : "없는"} 상품이에요
        </Availability>
      </ProductInfo>
    </Card>
  );
}
