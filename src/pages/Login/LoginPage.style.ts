import styled from "@emotion/styled";

export const LoginBrand = styled.div`
  position: absolute;
  top: 70px;

  @media (max-height: ${({ theme }) => theme.breakpoints.shortDesktop}) and (min-width: ${({ theme }) => `calc(${theme.breakpoints.mobile} + 1px)`}) {
    top: clamp(30px, 6vh, 70px);
  }
`;

export const LoginTitle = styled.div`
  position: absolute;
  top: 118px;

  @media (max-height: ${({ theme }) => theme.breakpoints.shortDesktop}) and (min-width: ${({ theme }) => `calc(${theme.breakpoints.mobile} + 1px)`}) {
    top: clamp(76px, 11vh, 118px);
  }
`;

export const Fields = styled.div`
  position: absolute;
  top: 241px;
  display: grid;
  gap: 35px;
  width: calc(100% - 46px);

  @media (max-height: ${({ theme }) => theme.breakpoints.shortDesktop}) and (min-width: ${({ theme }) => `calc(${theme.breakpoints.mobile} + 1px)`}) {
    top: clamp(145px, 23vh, 241px);
  }
`;

export const ForgotPasswordButton = styled.button`
  position: absolute;
  top: 357px;
  right: 22px;
  padding: 0;
  border: 0;
  color: ${({ theme }) => theme.colors.muted};
  background: transparent;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  letter-spacing: 1px;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 3px;
  }

  @media (max-height: ${({ theme }) => theme.breakpoints.shortDesktop}) and (min-width: ${({ theme }) => `calc(${theme.breakpoints.mobile} + 1px)`}) {
    top: clamp(265px, 36vh, 357px);
  }
`;

export const Actions = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.spacing.xxl};
  bottom: 38px;
  left: 18px;
  display: grid;
  gap: 11px;

  @media (max-height: ${({ theme }) => theme.breakpoints.shortDesktop}) and (min-width: ${({ theme }) => `calc(${theme.breakpoints.mobile} + 1px)`}) {
    bottom: clamp(20px, 4vh, 38px);
  }
`;

export const LoginContent = styled.div`
  height: 100%;
`;
