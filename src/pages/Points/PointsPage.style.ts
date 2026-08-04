import styled from "@emotion/styled";

export const PointsScreen = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
`;

export const Content = styled.div`
  flex: 1;
  min-height: 0;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xxl} 82px;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.ink};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.compact};
`;

export const Description = styled.p`
  margin: 0;
  color: #767676;
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.lineHeights.compact};
`;

export const PointSummary = styled.section`
  display: flex;
  min-height: 108px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: 24px;
  padding: ${({ theme }) => theme.spacing.xxl};
  border-radius: ${({ theme }) => theme.radii.card};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.compact};
`;

export const PointLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

export const PointValue = styled.strong`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const ProductSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: 24px;
`;

export const SectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const SectionTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.ink};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.compact};
`;

export const SectionDescription = styled.p`
  margin: 0;
  color: #767676;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.compact};
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};
`;
