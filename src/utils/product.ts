import type { ProductAnalysisData } from "../pages/ProductAnalysis/ProductAnalysisPage.types";
import type { BarcodeProductResponse } from "../types";

export function getReductionPercentage(
  totalCarbonKg: number,
  peerAverageCarbonKg: number
): number {
  if (peerAverageCarbonKg <= 0) {
    return 0;
  }

  return Math.round(
    Math.max(0, ((peerAverageCarbonKg - totalCarbonKg) / peerAverageCarbonKg) * 100)
  );
}

function getComparisonDescription(
  totalCarbonKg: number,
  peerAverageCarbonKg: number
): string {
  if (peerAverageCarbonKg <= 0) {
    return "동일 상품군의 평균 탄소 발자국 정보가 없어요.";
  }

  const differencePercentage = Math.round(
    (Math.abs(peerAverageCarbonKg - totalCarbonKg) / peerAverageCarbonKg) * 100
  );

  return totalCarbonKg <= peerAverageCarbonKg
    ? `평균보다 ${differencePercentage}% 낮아요.`
    : `평균보다 ${differencePercentage}% 높아요.`;
}

function getComparisonPosition(
  totalCarbonKg: number,
  peerAverageCarbonKg: number
): number {
  if (peerAverageCarbonKg <= 0) {
    return 50;
  }

  return Math.min(96, Math.max(4, (totalCarbonKg / peerAverageCarbonKg) * 50));
}

export function toProductAnalysisData(
  product: BarcodeProductResponse
): ProductAnalysisData {
  const { carbon_footprint: carbonFootprint } = product;

  return {
    id: product.barcode_number,
    name: product.product_name,
    brand: product.company ?? "제조사 정보 없음",
    imageUrl: product.product_image_uri,
    carbonKg: carbonFootprint.total_kg_co2e,
    reductionPercentage: getReductionPercentage(
      carbonFootprint.total_kg_co2e,
      carbonFootprint.peer_average_kg_co2e
    ),
    rewardPoints: null,
    esgLabel: product.esg ? "ESG 인증 상품" : "일반 상품",
    esgDescription: carbonFootprint.increase_factors_summary,
    comparisonDescription: getComparisonDescription(
      carbonFootprint.total_kg_co2e,
      carbonFootprint.peer_average_kg_co2e
    ),
    comparisonPosition: getComparisonPosition(
      carbonFootprint.total_kg_co2e,
      carbonFootprint.peer_average_kg_co2e
    ),
  };
}
