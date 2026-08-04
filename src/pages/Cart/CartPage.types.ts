import type { CartItem } from "../../types";

export interface CartProductRowProps {
  item: CartItem;
  checked: boolean;
  onToggle: (productId: string) => void;
}
