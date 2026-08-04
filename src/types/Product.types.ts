export type ProductImageKey = "home-run-ball";

export interface ProductData {
  id: string;
  name: string;
  brand: string;
  imageKey: ProductImageKey;
  carbonKg: number;
  reductionPercentage: number;
  rewardPoints: number;
}

export interface CartItem extends ProductData {
  barcode: string | null;
  addedAt: string;
}
