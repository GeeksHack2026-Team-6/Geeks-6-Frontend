import styled from "@emotion/styled";

export const SignupContent = styled.div`
  height: 100%;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 48px;
  left: ${({ theme }) => theme.spacing.page};
  display: grid;
  width: 20px;
  height: 20px;
  padding: 0;
  border: 0;
  background: transparent;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 3px;
  }

  @media (max-height: ${({ theme }) => theme.breakpoints.shortDesktop}) and (min-width: ${({ theme }) => `calc(${theme.breakpoints.mobile} + 1px)`}) {
    top: clamp(32px, 6vh, 48px);
  }
`;

export const Title = styled.div`
  position: absolute;
  top: 176px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;

  @media (max-height: ${({ theme }) => theme.breakpoints.shortDesktop}) and (min-width: ${({ theme }) => `calc(${theme.breakpoints.mobile} + 1px)`}) {
    top: clamp(110px, 19vh, 176px);
  }
`;

export const TitleWithBack = styled(Title)``;

export const Fields = styled.div`
  position: absolute;
  top: 289px;
  display: grid;
  gap: 36px;
  width: calc(100% - 46px);

  @media (max-height: ${({ theme }) => theme.breakpoints.shortDesktop}) and (min-width: ${({ theme }) => `calc(${theme.breakpoints.mobile} + 1px)`}) {
    top: clamp(200px, 31vh, 289px);
  }
`;

export const VerificationFields = styled(Fields)`
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const ResendButton = styled.button`
  position: absolute;
  top: 357px;
  right: 22px;
  padding: 0;
  border: 0;
  color: ${({ theme }) => theme.colors.muted};
  background: transparent;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  letter-spacing: 1px;

  @media (max-height: ${({ theme }) => theme.breakpoints.shortDesktop}) and (min-width: ${({ theme }) => `calc(${theme.breakpoints.mobile} + 1px)`}) {
    top: clamp(270px, 38vh, 357px);
  }
`;

export const VerificationNotice = styled.p`
  position: absolute;
  top: 377px;
  right: 22px;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 15px;
`;

export const Actions = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.spacing.xxl};
  bottom: 44px;
  left: ${({ theme }) => theme.spacing.xxl};
  display: grid;
  gap: 11px;

  @media (max-height: ${({ theme }) => theme.breakpoints.shortDesktop}) and (min-width: ${({ theme }) => `calc(${theme.breakpoints.mobile} + 1px)`}) {
    bottom: clamp(20px, 4vh, 38px);
  }
`;

export const ResponsiveContent = SignupContent;
