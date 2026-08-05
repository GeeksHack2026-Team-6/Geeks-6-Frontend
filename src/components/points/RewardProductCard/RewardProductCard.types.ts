export interface RewardProduct {
  id: string;
  name: string;
  pointPrice: number;
  imageUrl: string;
  imageAlt: string;
}

export interface RewardProductCardProps {
  product: RewardProduct;
  available: boolean;
}
