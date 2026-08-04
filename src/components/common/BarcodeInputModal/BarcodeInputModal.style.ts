import styled from "@emotion/styled";

export const ModalOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 4;
  background: rgb(0 0 0 / 60%);
`;

export const ModalDialog = styled.div`
  position: absolute;
  top: 168px;
  left: 50%;
  display: grid;
  width: calc(100% - 72px);
  max-width: 340px;
  gap: 32px;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xl};
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.card};
  background: ${({ theme }) => theme.colors.white};
  transform: translateX(-50%);
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: normal;
`;

export const DigitSlots = styled.label`
  position: relative;
  display: grid;
  grid-template-columns: repeat(13, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.xxs};
  width: 100%;
  cursor: text;
`;

export const DigitSlot = styled.span`
  display: grid;
  width: 100%;
  height: 20px;
  place-items: start center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.ink};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: normal;
`;

export const BarcodeInput = styled.input`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  outline: 0;
  opacity: 0;
  cursor: text;
`;
