import type { IconName } from "../common";

export interface ProductCardData {
  id: string;
  name: string;
  carbon: string;
  percentage: string;
  pointWeight: number;
  image?: string;
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
