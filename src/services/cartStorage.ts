import { STORAGE_KEYS } from "../constants";
import type { CartItem, ProductData } from "../types";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isCartItem(value: unknown): value is CartItem {
  if (!isRecord(value)) {
    return false;
  }

  return (
    typeof value.id === "string" &&
    typeof value.name === "string" &&
    typeof value.brand === "string" &&
    (typeof value.imageUrl === "string" || value.imageUrl === null) &&
    typeof value.carbonKg === "number" &&
    typeof value.reductionPercentage === "number" &&
    (typeof value.rewardPoints === "number" || value.rewardPoints === null) &&
    (typeof value.barcode === "string" || value.barcode === null) &&
    typeof value.addedAt === "string"
  );
}

export function getCartItems(): CartItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  const storedCart = window.localStorage.getItem(STORAGE_KEYS.cart);

  if (!storedCart) {
    return [];
  }

  try {
    const parsedCart: unknown = JSON.parse(storedCart);
    return Array.isArray(parsedCart) ? parsedCart.filter(isCartItem) : [];
  } catch {
    return [];
  }
}

function saveCartItems(items: CartItem[]) {
  window.localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(items));
}

export function addCartItem(product: ProductData, barcode?: string): CartItem[] {
  const currentItems = getCartItems();
  const nextItem: CartItem = {
    ...product,
    barcode: barcode ?? null,
    addedAt: new Date().toISOString(),
  };
  const existingItemIndex = currentItems.findIndex(({ id }) => id === product.id);
  const nextItems =
    existingItemIndex === -1
      ? [...currentItems, nextItem]
      : currentItems.map((item, index) =>
          index === existingItemIndex ? nextItem : item
        );

  saveCartItems(nextItems);
  return nextItems;
}

export function removeCartItems(productIds: string[]): CartItem[] {
  const productIdSet = new Set(productIds);
  const nextItems = getCartItems().filter(({ id }) => !productIdSet.has(id));
  saveCartItems(nextItems);
  return nextItems;
}
