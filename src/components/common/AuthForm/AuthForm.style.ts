import styled from "@emotion/styled";
import type { AuthFormVariant } from "./AuthForm.types";

export const Form = styled.form<{ $variant: AuthFormVariant; $isVerification: boolean }>`
  position: relative;
  height: 100%;
  min-height: 0;
  padding: 0 ${({ theme }) => theme.spacing.page};
  overflow: hidden;
`;
