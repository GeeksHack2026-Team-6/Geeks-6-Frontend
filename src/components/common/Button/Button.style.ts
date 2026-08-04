import styled from "@emotion/styled";
import type { ButtonVariant } from "./Button.types";

export const StyledButton = styled.button<{ $variant: ButtonVariant }>`
  border: 0;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: 1px;

  ${({ $variant, theme }) =>
    $variant === "primary"
      ? `
        width: 100%;
        height: 55px;
        border-radius: ${theme.radii.button};
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
        font-size: ${theme.fontSizes.lg};

        &:disabled { background: ${theme.colors.primaryDisabled}; }
      `
      : `
        padding: 0;
        color: ${theme.colors.muted};
        background: transparent;
        font-size: ${theme.fontSizes.xs};
      `}

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 3px;
  }
`;
