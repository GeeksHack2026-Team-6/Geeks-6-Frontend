import styled from "@emotion/styled";

export const ErrorScreen = styled.main`
  display: grid;
  min-height: 100%;
  padding: ${({ theme }) => theme.spacing.page};
  place-items: center;
  text-align: center;
`;

export const ErrorContent = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
  justify-items: center;
  max-width: 280px;
`;

export const ErrorBadge = styled.span`
  display: grid;
  width: 64px;
  height: 64px;
  place-items: center;
  color: ${({ theme }) => theme.colors.danger};
  border-radius: ${({ theme }) => theme.radii.round};
  background: ${({ theme }) => theme.colors.dangerSoft};
  font-size: 30px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const ErrorTitle = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export const ErrorDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
`;

export const RetryButton = styled.button`
  width: 100%;
  min-height: 48px;
  border: 0;
  border-radius: ${({ theme }) => theme.radii.button};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;
