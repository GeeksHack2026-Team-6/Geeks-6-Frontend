import type { IconName } from "../common";

export interface ProductCardData {
  id: string;
  name: string;
  carbon: string;
  percentage: string;
  pointWeight: number;
  imageUrl: string | null;
}
export interface SummaryCardProps {
  type: string;
  value: string;
  label: string;
  icon: IconName;
}
export interface ProductSectionProps {
  title: string;
  cards: ProductCardData[];
}
