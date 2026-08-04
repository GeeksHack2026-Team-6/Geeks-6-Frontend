import { Icon } from "../Icon";
import type { IconName } from "../Icon";

export interface ProductCardData {
  name: string;
  carbon: string;
  percentage: string;
  points: string;
  image?: string;
}

export function SummaryCard({ type, value, label, icon }: { type: string; value: string; label: string; icon: IconName }) {
  return (
    <article className="summary-card">
      <Icon name={icon} className="summary-icon" alt={`${type} 아이콘`} />
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  );
}

function ProductCard({ card }: { card: ProductCardData }) {
  return (
    <article className="product-card">
      <div className={`product-image ${!card.image ? "placeholder-image" : ""}`}>
        {card.image ? <img src={card.image} alt={`${card.name} 상품 이미지`} /> : <span>이미지 준비중...</span>}
      </div>
      <div className="product-copy">
        <strong title={card.name}>{card.name}</strong>
        <p className="carbon"><span aria-hidden="true"><Icon name="carbon-footprint.svg" /></span>{card.carbon} kg CO₂e</p>
        <p>평균보다 <em>{card.percentage}%</em> 낮아요</p>
        <p>+ {card.points}P 적립 가능해요</p>
      </div>
    </article>
  );
}

export function ProductSection({ title, cards }: { title: string; cards: ProductCardData[] }) {
  return (
    <section className="product-section" aria-labelledby={title}>
      <h2 id={title}>{title}</h2>
      <div className="card-row" role="region" aria-label={`${title} 목록`} tabIndex={0}>
        {cards.map((card) => <ProductCard key={card.name} card={card} />)}
      </div>
    </section>
  );
}
