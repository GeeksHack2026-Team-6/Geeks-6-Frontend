import { useRef, useState, type ChangeEvent } from "react";
import { Icon } from "../../components/common";
import { BottomNavigation, MobileFrame } from "../../components/layout";
import { useCart } from "../../hooks";
import { addMemberPoints, getProductsByReceipt } from "../../services";
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
  ReceiptFeedback,
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
        {item.imageUrl && (
          <ProductImage src={item.imageUrl} alt={`${item.brand} ${item.name}`} />
        )}
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
  const receiptInputRef = useRef<HTMLInputElement>(null);
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>(() =>
    items.map(({ id }) => id)
  );
  const [isReceiptProcessing, setIsReceiptProcessing] = useState(false);
  const [receiptMessage, setReceiptMessage] = useState<string | null>(null);
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

  const openReceiptCamera = () => {
    receiptInputRef.current?.click();
  };

  const handleReceiptImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    event.currentTarget.value = "";

    if (!file) {
      return;
    }

    const supportedImageTypes = new Set(["image/jpeg", "image/png", "image/webp"]);

    if (!supportedImageTypes.has(file.type) || file.size > 10 * 1024 * 1024) {
      setReceiptMessage(
        "JPEG, PNG, WebP 형식의 10MB 이하 영수증 이미지를 선택해 주세요."
      );
      return;
    }

    const selectedBarcodes = new Set(
      items
        .filter((item) => selectedProductIds.includes(item.id))
        .map((item) => item.barcode)
        .filter((barcode): barcode is string => Boolean(barcode))
    );

    if (selectedBarcodes.size === 0) {
      setReceiptMessage("바코드가 있는 장바구니 상품을 선택해 주세요.");
      return;
    }

    setIsReceiptProcessing(true);
    setReceiptMessage(null);

    try {
      const receiptProducts = await getProductsByReceipt(file);
      const matchedProducts = receiptProducts.filter((product) =>
        selectedBarcodes.has(product.barcode_number)
      );
      const points = Math.round(
        matchedProducts.reduce((total, product) => total + product.points_earned, 0)
      );

      if (points < 1 || points > 1_000_000) {
        setReceiptMessage(
          "영수증에서 선택한 장바구니 상품의 적립 포인트를 찾지 못했습니다."
        );
        return;
      }

      const member = await addMemberPoints(points);
      setReceiptMessage(
        `영수증에서 ${matchedProducts.length}개 상품을 확인해 ${points.toLocaleString()}P를 적립했습니다. 현재 포인트는 ${member.points.toLocaleString()}P입니다.`
      );
    } catch {
      setReceiptMessage(
        "영수증을 처리하거나 포인트를 적립하지 못했습니다. 다시 시도해 주세요."
      );
    } finally {
      setIsReceiptProcessing(false);
    }
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
          <input
            ref={receiptInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            capture="environment"
            hidden
            onChange={handleReceiptImageChange}
          />
          {receiptMessage && (
            <ReceiptFeedback role="status">{receiptMessage}</ReceiptFeedback>
          )}
          <ReceiptButton
            type="button"
            disabled={selectedProductIds.length === 0 || isReceiptProcessing}
            onClick={openReceiptCamera}>
            <Icon name="receipt" size={20} />
            {isReceiptProcessing ? "영수증 확인 중..." : "영수증 촬영으로 상품 확인하기"}
          </ReceiptButton>
        </ReceiptPanel>
        <BottomNavigation />
      </CartScreen>
    </MobileFrame>
  );
}
