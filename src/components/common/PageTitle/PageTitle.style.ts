import styled from "@emotion/styled";
import type { PageTitleSize } from "./PageTitle.types";

export const Heading = styled.h1<{ $size: PageTitleSize }>`
  margin: 0;
  color: ${({ theme }) => theme.colors.heading};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.compact};

  ${({ $size, theme }) => {
    if ($size === "auth")
      return `font-size: ${theme.fontSizes.xxl}; line-height: ${theme.lineHeights.normal}; letter-spacing: 1px;`;
    if ($size === "home")
      return `color: ${theme.colors.ink}; font-size: ${theme.fontSizes.xl};`;
    return `color: ${theme.colors.ink}; font-size: ${theme.fontSizes.md};`;
  }}
`;
