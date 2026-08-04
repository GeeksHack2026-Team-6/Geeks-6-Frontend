import type { ProductData } from "../../types";

export interface ProductAnalysisData extends ProductData {
  esgLabel: string;
  esgDescription: string;
  comparisonDescription: string;
  comparisonPosition: number;
}

export interface ProductAnalysisLocationState {
  barcode?: string;
}
