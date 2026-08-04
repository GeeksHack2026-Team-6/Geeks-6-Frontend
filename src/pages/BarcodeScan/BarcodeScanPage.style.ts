import styled from "@emotion/styled";

export const ScanScreen = styled.div`
  min-height: 100%;
  padding: ${({ theme }) => theme.spacing.xxl};
  background: ${({ theme }) => theme.colors.surface};
`;

export const CloseButton = styled.button`
  display: grid;
  width: 24px;
  height: 24px;
  padding: 0;
  place-items: center;
  border: 0;
  background: transparent;

  &:focus-visible {
    border-radius: ${({ theme }) => theme.spacing.xxs};
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 3px;
  }
`;

export const ScanContent = styled.div`
  display: grid;
  margin-top: 24px;
`;

export const ScanTitle = styled.h1`
  margin: 0 0 28px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.normal};
`;

export const ScannerFrame = styled.div`
  width: 100%;
  aspect-ratio: 372 / 200;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.ink};
  border-radius: ${({ theme }) => theme.radii.card};
  background: ${({ theme }) => theme.colors.ink};

  video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ManualEntryButton = styled.button`
  display: flex;
  align-items: center;
  justify-self: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: 48px;
  padding: 0;
  border: 0;
  color: ${({ theme }) => theme.colors.ink};
  background: transparent;
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.lineHeights.normal};

  span {
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  &:focus-visible {
    border-radius: ${({ theme }) => theme.spacing.xxs};
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 4px;
  }
`;
