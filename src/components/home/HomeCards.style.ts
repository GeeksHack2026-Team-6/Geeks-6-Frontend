import styled from "@emotion/styled";

export const SummaryCardRoot = styled.article`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  min-height: 120px;
  padding: ${({ theme }) => theme.spacing.xl};
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.card};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.card};

  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
  }
  span {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 20px;
    white-space: nowrap;
  }
`;

export const ProductSectionRoot = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const CardRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xxs} 0;
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-x: contain;
  scroll-padding-inline: ${({ theme }) => theme.spacing.xxl};
  scroll-snap-type: x proximity;
  scrollbar-color: rgba(17, 17, 17, 0.28) transparent;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: ${({ theme }) => theme.radii.round};
    background: rgba(17, 17, 17, 0.28);
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 3px;
  }
`;

export const ProductCardRoot = styled.article`
  flex: 0 0 144px;
  width: 144px;
  height: 160px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.card};
  background: ${({ theme }) => theme.colors.white};
  scroll-snap-align: start;
`;

export const ProductImage = styled.div<{ $isPlaceholder: boolean }>`
  display: ${({ $isPlaceholder }) => ($isPlaceholder ? "grid" : "block")};
  height: 68px;
  place-items: center;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.white};
  background: #767676;
  font-size: ${({ theme }) => theme.fontSizes.xs};

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductCopy = styled.div`
  display: grid;
  gap: 2px;
  padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) => theme.spacing.sm};

  strong {
    overflow: hidden;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    line-height: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: 15px;
    white-space: nowrap;
  }
  em {
    color: ${({ theme }) => theme.colors.primary};
    font-style: normal;
  }
`;

export const Carbon = styled.p`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxs};

  span {
    display: inline-grid;
    width: 20px;
    height: 20px;
    place-items: center;
  }
`;
