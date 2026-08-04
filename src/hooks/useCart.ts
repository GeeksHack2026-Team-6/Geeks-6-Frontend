import { useCallback, useState } from "react";
import { addCartItem, getCartItems, removeCartItems } from "../services";
import type { ProductData } from "../types";

export function useCart() {
  const [items, setItems] = useState(getCartItems);

  const addItem = useCallback((product: ProductData, barcode?: string) => {
    setItems(addCartItem(product, barcode));
  }, []);

  const removeItems = useCallback((productIds: string[]) => {
    setItems(removeCartItems(productIds));
  }, []);

  return { items, addItem, removeItems };
}
