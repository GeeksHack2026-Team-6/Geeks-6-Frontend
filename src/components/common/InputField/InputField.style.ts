import styled from "@emotion/styled";

export const FieldRoot = styled.label<{ $hasError: boolean }>`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  min-width: 0;

  &:focus-within > span:first-of-type {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  ${({ $hasError, theme }) => $hasError && `& > span:first-of-type { border-color: ${theme.colors.danger}; }`}
`;

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
`;

export const FieldLine = styled.span`
  display: flex;
  align-items: end;
  width: 100%;
  min-height: 35px;
  padding: 0 ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.xs};
  border-bottom: 2px solid ${({ theme }) => theme.colors.field};
`;

export const TextInput = styled.input`
  width: 100%;
  min-width: 0;
  height: 24px;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  border: 0;
  outline: 0;
  color: ${({ theme }) => theme.colors.ink};
  background: transparent;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  letter-spacing: 0.5px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const VisibilityButton = styled.button`
  display: grid;
  width: 24px;
  height: 24px;
  padding: ${({ theme }) => theme.spacing.xxs};
  border: 0;
  background: transparent;
`;

export const ErrorMessage = styled.span`
  min-height: 15px;
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 15px;
`;
