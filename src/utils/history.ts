import type { ProductCardData } from "../components/home";
import type {
  ConsumptionSummaryItem,
  PurchaseHistoryItem,
} from "../pages/My/MyPage.types";
import type { ProductFetchHistoryItem, ProductHistoryResponse } from "../types";
import { getReductionPercentage } from "./product";

export function getRecentHistoryItems(
  history: ProductHistoryResponse | null
): ProductFetchHistoryItem[] {
  if (!history) {
    return [];
  }

  return [...history.food, ...history.product].sort(
    (left, right) => Date.parse(right.fetched_at) - Date.parse(left.fetched_at)
  );
}

export function toProductCardData(item: ProductFetchHistoryItem): ProductCardData {
  const footprint = item.product.carbon_footprint;

  return {
    id: item.id,
    name: item.product.product_name,
    carbon: footprint.total_kg_co2e.toFixed(2),
    percentage: getReductionPercentage(
      footprint.total_kg_co2e,
      footprint.peer_average_kg_co2e
    ).toString(),
    pointWeight: Math.round(footprint.point_weight * 100),
    image: item.product.product_image_uri ?? undefined,
  };
}

export function getTotalCarbonReductionKg(items: ProductFetchHistoryItem[]): number {
  return items.reduce((total, item) => {
    const footprint = item.product.carbon_footprint;
    return total + Math.max(0, footprint.peer_average_kg_co2e - footprint.total_kg_co2e);
  }, 0);
}

export function toConsumptionSummary(
  items: ProductFetchHistoryItem[]
): ConsumptionSummaryItem[] {
  return [
    {
      label: "친환경 상품 확인",
      value: `${items.length}건`,
      icon: "responsible-consumption",
    },
    {
      label: "ESG 인증 상품 확인",
      value: `${items.filter((item) => item.product.esg).length}건`,
      icon: "purchase-verification",
    },
    {
      label: "지금까지 절감한 탄소",
      value: `${getTotalCarbonReductionKg(items).toFixed(2)}kg`,
      icon: "carbon-reduction",
    },
  ];
}

export function toPurchaseHistoryItems(
  items: ProductFetchHistoryItem[]
): PurchaseHistoryItem[] {
  return items.map((item) => ({
    id: item.id,
    name: item.product.product_name,
    carbonKg: item.product.carbon_footprint.total_kg_co2e,
  }));
}
