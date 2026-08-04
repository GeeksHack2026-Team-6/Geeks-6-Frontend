import styled from "@emotion/styled";

export const CartScreen = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
`;

export const CartContent = styled.div`
  flex: 1;
  min-height: 0;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xxl} 210px;
  overflow-y: auto;
`;

export const CartHeader = styled.header`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const CartTitle = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.compact};
`;

export const CartDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.subtle};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.lineHeights.compact};
`;

export const SelectionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;

export const SelectionLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.subtle};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.compact};
  cursor: pointer;
`;

export const ItemCheckbox = styled.input`
  position: relative;
  width: 20px;
  height: 20px;
  flex: 0 0 20px;
  margin: 0;
  appearance: none;
  border: 1px solid ${({ theme }) => theme.colors.subtle};
  background: transparent;
  cursor: pointer;

  &:checked {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary};
  }

  &:checked::after {
    position: absolute;
    top: 2px;
    left: 6px;
    width: 5px;
    height: 10px;
    border: solid ${({ theme }) => theme.colors.white};
    border-width: 0 2px 2px 0;
    content: "";
    transform: rotate(45deg);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }
`;

export const DeleteButton = styled.button`
  display: grid;
  width: 20px;
  height: 20px;
  padding: 2px;
  place-items: center;
  border: 0;
  border-radius: ${({ theme }) => theme.spacing.xxs};
  background: ${({ theme }) => theme.colors.dangerSoft};

  &:disabled {
    opacity: 0.45;
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }
`;

export const ItemList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: 24px;
`;

export const ProductRow = styled.article`
  display: grid;
  grid-template-columns: 20px 120px minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: start;
  min-height: 152px;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radii.card};
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: 360px) {
    grid-template-columns: 20px 96px minmax(0, 1fr);
    gap: ${({ theme }) => theme.spacing.lg};
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

export const ProductImageFrame = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: 360px) {
    width: 96px;
    height: 96px;
  }
`;

export const ProductImage = styled.img`
  position: absolute;
  top: -25%;
  left: 50%;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  transform: translateX(-50%);
`;

export const ProductDetails = styled.div`
  display: grid;
  min-width: 0;
  gap: ${({ theme }) => theme.spacing.xxs};
`;

export const ProductName = styled.strong`
  overflow: hidden;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProductBrand = styled.span`
  color: ${({ theme }) => theme.colors.subtle};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const ProductCarbon = styled.span`
  margin-top: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const ProductReward = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.lineHeights.compact};
`;

export const EmptyState = styled.p`
  margin: 48px 0 0;
  color: ${({ theme }) => theme.colors.subtle};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const ReceiptPanel = styled.section`
  position: absolute;
  right: ${({ theme }) => theme.spacing.xxl};
  bottom: 82px;
  left: ${({ theme }) => theme.spacing.xxl};
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radii.card};
  background: ${({ theme }) => theme.colors.primary};
`;

export const ReceiptTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.compact};
`;

export const ReceiptButton = styled.button`
  display: flex;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xl};
  border: 0;
  border-radius: ${({ theme }) => theme.radii.round};
  color: ${({ theme }) => theme.colors.ink};
  background: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights.compact};

  &:disabled {
    color: ${({ theme }) => theme.colors.subtle};
    opacity: 0.72;
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 3px;
  }
`;
