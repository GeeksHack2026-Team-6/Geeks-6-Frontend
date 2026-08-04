import styled from "@emotion/styled";

export const MyScreen = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
`;

export const MyContent = styled.div`
  flex: 1;
  min-height: 0;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xxl} 80px;
  overflow-y: auto;
`;

export const MyHeader = styled.header`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const MyTitle = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.compact};
`;

export const MyDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.subtle};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.lineHeights.compact};
`;

export const SummaryList = styled.dl`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: 24px 0 0;
`;

export const SummaryRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  min-height: 24px;
`;

export const SummaryLabel = styled.dt`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxs};
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.lineHeights.compact};
`;

export const SummaryValue = styled.dd`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.compact};
`;

export const HistorySection = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: 24px;
`;

export const HistoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    line-height: ${({ theme }) => theme.lineHeights.compact};
  }
`;

export const AllHistoryButton = styled.button`
  padding: 0 0 1px;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.subtle};
  color: ${({ theme }) => theme.colors.subtle};
  background: transparent;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.compact};

  &:focus-visible {
    border-radius: ${({ theme }) => theme.spacing.xxs};
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 3px;
  }
`;

export const HistoryList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
  margin: 0;
  padding: ${({ theme }) => theme.spacing.sm};
  list-style: none;
`;

export const HistoryRow = styled.li`
  display: flex;
  min-height: 20px;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.compact};
`;

export const HistoryName = styled.span``;

export const HistoryPoints = styled.span`
  white-space: nowrap;
`;

export const ContentDivider = styled.hr`
  width: 100%;
  height: 1px;
  margin: 24px 0;
  border: 0;
  border-radius: ${({ theme }) => theme.radii.round};
  background: ${({ theme }) => theme.colors.subtle};
`;

export const MenuList = styled.nav`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const MenuButton = styled.button`
  display: flex;
  width: 100%;
  min-height: 24px;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 0;
  border: 0;
  color: ${({ theme }) => theme.colors.heading};
  background: transparent;
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.normal};

  &:focus-visible {
    border-radius: ${({ theme }) => theme.spacing.xxs};
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 3px;
  }
`;

export const SignoutButton = styled(MenuButton)`
  margin-top: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.danger};
`;
