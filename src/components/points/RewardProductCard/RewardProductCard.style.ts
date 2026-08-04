import styled from "@emotion/styled";
import type { RewardBrand } from "./RewardProductCard.types";

export const Card = styled.article`
  display: flex;
  width: 100%;
  min-height: 91px;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.sm};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.ink};
  border-radius: ${({ theme }) => theme.radii.card};
`;

export const ImageFrame = styled.div<{ $brand: RewardBrand }>`
  display: grid;
  flex: 0 0 122px;
  width: 122px;
  height: 72px;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.white};

  img {
    display: block;
    width: ${({ $brand }) => ($brand === "cu" ? "74px" : $brand === "gs25" ? "68px" : "100%")};
    height: ${({ $brand }) => ($brand === "cu" ? "50px" : $brand === "gs25" ? "68px" : "100%")};
    object-fit: ${({ $brand }) => ($brand === "daiso" ? "cover" : "contain")};
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.compact};
`;

export const ProductMeta = styled.div`
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxs};
`;

export const ProductName = styled.strong`
  overflow: hidden;
  color: ${({ theme }) => theme.colors.ink};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProductPoints = styled.strong`
  color: ${({ theme }) => theme.colors.field};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const Availability = styled.span<{ $available: boolean }>`
  color: ${({ $available, theme }) =>
    $available ? theme.colors.primary : theme.colors.danger};
  white-space: nowrap;
`;
