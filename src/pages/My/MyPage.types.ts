import type { IconName } from "../../components/common";

export interface ConsumptionSummaryItem {
  label: string;
  value: string;
  icon: IconName;
}

export interface PurchaseHistoryItem {
  id: string;
  name: string;
  carbonKg: number;
}

export interface MyMenuItem {
  label: string;
  icon: IconName;
}
