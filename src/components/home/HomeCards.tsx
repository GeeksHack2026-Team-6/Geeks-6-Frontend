import { Icon, PageTitle } from "../common";
import {
  CardRow,
  Carbon,
  ProductCardRoot,
  ProductCopy,
  ProductImage,
  ProductSectionRoot,
  SummaryCardRoot,
} from "./HomeCards.style";
import type {
  ProductCardData,
  ProductSectionProps,
  SummaryCardProps,
} from "./HomeCards.types";

export function SummaryCard({ type, value, label, icon }: SummaryCardProps) {
  return (
    <SummaryCardRoot>
      <Icon name={icon} alt={`${type} 아이콘`} />
      <strong>{value}</strong>
      <span>{label}</span>
    </SummaryCardRoot>
  );
}

function ProductCard({ card }: { card: ProductCardData }) {
  return (
    <ProductCardRoot>
      <ProductImage $isPlaceholder={!card.image}>
        {card.image ? (
          <img src={card.image} alt={`${card.name} 상품 이미지`} />
        ) : (
          <span>이미지 준비중...</span>
        )}
      </ProductImage>
      <ProductCopy>
        <strong title={card.name}>{card.name}</strong>
        <Carbon>
          <span aria-hidden="true">
            <Icon name="carbon-footprint" size={20} />
          </span>
          {card.carbon} kg CO₂
        </Carbon>
        <p>
          평균보다 <em>{card.percentage}%</em> 더 낮아요
        </p>
        <p>+ {card.points}P 적립 가능해요</p>
      </ProductCopy>
    </ProductCardRoot>
  );
}

export function ProductSection({ title, cards }: ProductSectionProps) {
  const titleId = `${title}-heading`;
  return (
    <ProductSectionRoot aria-labelledby={titleId}>
      <PageTitle as="h2" size="section" id={titleId}>
        {title}
      </PageTitle>
      <CardRow role="region" aria-label={`${title} 목록`} tabIndex={0}>
        {cards.map((card) => (
          <ProductCard key={card.name} card={card} />
        ))}
      </CardRow>
    </ProductSectionRoot>
  );
}
