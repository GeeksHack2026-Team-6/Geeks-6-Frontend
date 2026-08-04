import styled from "@emotion/styled";

export const LogoText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.heading};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  letter-spacing: 1px;
`;
