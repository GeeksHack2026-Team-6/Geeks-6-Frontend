import styled from "@emotion/styled";

export const HomeScreen = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
`;

export const Content = styled.div`
  flex: 1;
  min-height: 0;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xxl} 70px;
  overflow: hidden;
`;

export const HomeHeading = styled.div`
  margin-bottom: 24px;
`;

export const SummarySection = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;
