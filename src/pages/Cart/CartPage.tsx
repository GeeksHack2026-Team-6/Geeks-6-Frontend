import { useState } from "react";
import homeRunBall from "../../assets/images/home-run-ball-analysis.png";
import { Icon } from "../../components/common";
import { BottomNavigation, MobileFrame } from "../../components/layout";
import { useCart } from "../../hooks";
import {
  CartContent,
  CartDescription,
  CartHeader,
  CartScreen,
  CartTitle,
  DeleteButton,
  EmptyState,
  ItemCheckbox,
  ItemList,
  ProductBrand,
  ProductCarbon,
  ProductDetails,
  ProductImage,
  ProductImageFrame,
  ProductName,
  ProductReward,
  ProductRow,
  ReceiptButton,
  ReceiptPanel,
  ReceiptTitle,
  SelectionBar,
  SelectionLabel,
} from "./CartPage.style";
import type { CartProductRowProps } from "./CartPage.types";

function CartProductRow({ item, checked, onToggle }: CartProductRowProps) {
  return (
    <ProductRow>
      <ItemCheckbox
        type="checkbox"
        checked={checked}
        aria-label={`${item.name} 선택`}
        onChange={() => onToggle(item.id)}
      />
      <ProductImageFrame>
        <ProductImage
          src={item.imageUrl ?? homeRunBall}
          alt={`${item.brand} ${item.name}`}
        />
      </ProductImageFrame>
      <ProductDetails>
        <ProductName>{item.name}</ProductName>
        <ProductBrand>{item.brand}</ProductBrand>
        <ProductCarbon>{item.carbonKg.toFixed(2)} kg CO₂e</ProductCarbon>
        {item.rewardPoints !== null && (
          <ProductReward>구매 인증 시 +{item.rewardPoints}P</ProductReward>
        )}
      </ProductDetails>
    </ProductRow>
  );
}

export function CartPage() {
  const { items, removeItems } = useCart();
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>(() =>
    items.map(({ id }) => id)
  );
  const allSelected = items.length > 0 && selectedProductIds.length === items.length;

  const toggleAll = () => {
    setSelectedProductIds(allSelected ? [] : items.map(({ id }) => id));
  };

  const toggleProduct = (productId: string) => {
    setSelectedProductIds((currentIds) =>
      currentIds.includes(productId)
        ? currentIds.filter((id) => id !== productId)
        : [...currentIds, productId]
    );
  };

  const deleteSelectedItems = () => {
    removeItems(selectedProductIds);
    setSelectedProductIds([]);
  };

  return (
    <MobileFrame>
      <CartScreen>
        <CartContent>
          <CartHeader>
            <CartTitle>장바구니</CartTitle>
            <CartDescription>
              사고 싶은 상품을 담아놓으세요
              <br />
              구매 후 한 번에 인증을 해서 포인트를 받을 수 있어요
            </CartDescription>
          </CartHeader>

          <SelectionBar>
            <SelectionLabel>
              <ItemCheckbox
                type="checkbox"
                checked={allSelected}
                aria-label="장바구니 상품 전체 선택"
                onChange={toggleAll}
              />
              <span>
                전체 선택 ({selectedProductIds.length}/{items.length})
              </span>
            </SelectionLabel>
            <DeleteButton
              type="button"
              disabled={selectedProductIds.length === 0}
              aria-label="선택한 상품 삭제"
              onClick={deleteSelectedItems}>
              <Icon name="delete" size={16} />
            </DeleteButton>
          </SelectionBar>

          <ItemList aria-label="장바구니 상품 목록">
            {items.length === 0 ? (
              <EmptyState>장바구니에 담긴 상품이 없어요</EmptyState>
            ) : (
              items.map((item) => (
                <CartProductRow
                  key={item.id}
                  item={item}
                  checked={selectedProductIds.includes(item.id)}
                  onToggle={toggleProduct}
                />
              ))
            )}
          </ItemList>
        </CartContent>

        <ReceiptPanel>
          <ReceiptTitle>친환경 제품 구매를 인증하고, 포인트를 받아보아요</ReceiptTitle>
          <ReceiptButton
            type="button"
            disabled={selectedProductIds.length === 0}
            onClick={() => window.alert("영수증 인증 기능은 준비 중입니다.")}>
            <Icon name="receipt" size={20} />
            영수증으로 제품 구매 인증하기
          </ReceiptButton>
        </ReceiptPanel>
        <BottomNavigation />
      </CartScreen>
    </MobileFrame>
  );
}
