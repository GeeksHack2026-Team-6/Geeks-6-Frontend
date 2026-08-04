import type { IconName } from "../common";

export interface ProductCardData {
  name: string;
  carbon: string;
  percentage: string;
  points: string;
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
