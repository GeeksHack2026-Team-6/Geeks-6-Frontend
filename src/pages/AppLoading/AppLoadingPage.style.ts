import styled from "@emotion/styled";

export const LoadingScreen = styled.main`
  display: grid;
  min-height: 100%;
  padding: ${({ theme }) => theme.spacing.page};
  place-items: center;
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
