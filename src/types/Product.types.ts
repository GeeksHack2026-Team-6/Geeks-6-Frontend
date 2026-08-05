export interface ProductData {
  id: string;
  name: string;
  brand: string;
  imageUrl: string | null;
  carbonKg: number;
  reductionPercentage: number;
  rewardPoints: number | null;
}

export interface CartItem extends ProductData {
  barcode: string | null;
  addedAt: string;
}

export interface CarbonFootprint {
  material_sourcing_kg_co2e: number;
  processing_and_manufacturing_kg_co2e: number;
  packaging_kg_co2e: number;
  transportation_kg_co2e: number;
  reusability_kg_co2e: number;
  total_kg_co2e: number;
  peer_average_kg_co2e: number;
  point_weight: number;
  increase_factors_summary: string;
}

export interface BarcodeProductResponse {
  barcode_number: string;
  product_image_uri: string | null;
  product_report_number: string | null;
  company: string | null;
  company_report_number: string | null;
  product_name: string;
  esg: boolean;
  carbon_footprint: CarbonFootprint;
}

export interface ReceiptProductResponse extends BarcodeProductResponse {
  quantity: number;
  price: number;
  points_earned: number;
}

export interface ProductFetchHistoryItem {
  id: string;
  fetched_at: string;
  product: BarcodeProductResponse;
}

export interface ProductHistoryResponse {
  food: ProductFetchHistoryItem[];
  product: ProductFetchHistoryItem[];
}
