import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Footer = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 18px;
  letter-spacing: 1px;
`;

export const FooterLink = styled(Link)`
  color: inherit;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-underline-offset: 2px;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 3px;
  }
`;
