import styled from "@emotion/styled";

export const AnalysisScreen = styled.div`
  min-height: 100%;
  padding: ${({ theme }) => theme.spacing.xxl};
  background: ${({ theme }) => theme.colors.surface};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  min-height: 24px;
`;

export const BackButton = styled.button`
  display: grid;
  width: 24px;
  height: 24px;
  padding: 0;
  place-items: center;
  border: 0;
  background: transparent;

  &:focus-visible {
    border-radius: ${({ theme }) => theme.spacing.xxs};
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 3px;
  }
`;

export const PageHeading = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.normal};
`;

export const AnalysisContent = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const ProductImageCard = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 372 / 218;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.ink};
  border-radius: ${({ theme }) => theme.radii.card};
  background: ${({ theme }) => theme.colors.white};
`;

export const ProductImage = styled.img`
  position: absolute;
  top: -24%;
  left: 50%;
  width: 88.5%;
  aspect-ratio: 1;
  object-fit: cover;
  transform: translateX(-50%);
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductMeta = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xxs};
`;

export const ProductName = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.normal};
`;

export const ProductBrand = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.lineHeights.normal};
`;

export const RewardBadge = styled.div`
  min-width: 56px;
  padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radii.card};
  color: ${({ theme }) => theme.colors.primary};
  background: rgb(22 163 74 / 20%);
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights.compact};
`;

export const Section = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.normal};
`;

export const CarbonCard = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radii.card};
  background: ${({ theme }) => theme.colors.white};
`;

export const CarbonHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const CarbonValue = styled.strong`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.normal};
`;

export const CarbonComparison = styled.p`
  margin: ${({ theme }) => theme.spacing.sm} 0 13px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.normal};

  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }
`;

export const ComparisonBar = styled.div`
  position: relative;
  height: 10px;

  &::before,
  span {
    position: absolute;
    top: 4px;
    left: 0;
    height: 2px;
  }

  &::before {
    right: 0;
    background: #d9d9d9;
    content: "";
  }

  span {
    z-index: 1;
    width: 32.6%;
    background: ${({ theme }) => theme.colors.primary};
  }

  i,
  b {
    position: absolute;
    z-index: 2;
    top: 0;
    display: block;
    border-radius: 50%;
    transform: translateX(-50%);
  }

  i {
    left: 30.5%;
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.colors.primary};
  }

  b {
    top: 1px;
    left: 50%;
    width: 8px;
    height: 8px;
    background: #9e9e9e;
  }
`;

export const ComparisonLabels = styled.div`
  position: relative;
  height: 17px;
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.lineHeights.compact};

  span {
    position: absolute;
    transform: translateX(-50%);
  }

  span:first-of-type {
    left: 30.5%;
  }

  span:last-of-type {
    left: 50%;
  }
`;

export const EsgCard = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radii.card};
  background: ${({ theme }) => theme.colors.white};
`;

export const EsgStatus = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const EsgDescription = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.normal};
`;

export const EsDetailButton = styled.button`
  justify-self: start;
  padding: 0;
  border: 0;
  color: ${({ theme }) => theme.colors.ink};
  background: transparent;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-decoration: underline;
  text-underline-offset: 3px;

  &:focus-visible {
    border-radius: ${({ theme }) => theme.spacing.xxs};
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 3px;
  }
`;

export const CartButton = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 2px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.card};
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 3px;
  }
`;
