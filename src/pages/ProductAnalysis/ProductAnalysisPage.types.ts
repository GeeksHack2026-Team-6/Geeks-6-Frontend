import type { ProductData } from "../../types";

export interface ProductAnalysisData extends ProductData {
  esgRating: string;
  esgDescription: string;
}

export interface ProductAnalysisLocationState {
  barcode?: string;
}
