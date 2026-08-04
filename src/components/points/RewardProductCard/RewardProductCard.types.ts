export type RewardBrand = "cu" | "daiso" | "gs25";

export interface RewardProduct {
  id: string;
  name: string;
  points: number;
  image: string;
  imageAlt: string;
  brand: RewardBrand;
}

export interface RewardProductCardProps {
  product: RewardProduct;
  available: boolean;
}
