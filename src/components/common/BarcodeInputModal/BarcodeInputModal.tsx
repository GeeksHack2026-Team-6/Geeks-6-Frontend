import { useEffect, useId, useRef } from "react";
import {
  BarcodeInput,
  DigitSlot,
  DigitSlots,
  ModalDialog,
  ModalOverlay,
  ModalTitle,
  SubmitButton,
} from "./BarcodeInputModal.style";
import type { BarcodeInputModalProps } from "./BarcodeInputModal.types";

const MAX_BARCODE_LENGTH = 14;
const isSupportedBarcode = (barcode: string) => /^(?:\d{8}|\d{12,14})$/.test(barcode);

export function BarcodeInputModal({
  value,
  onChange,
  onSubmit,
  onClose,
}: BarcodeInputModalProps) {
  const titleId = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleChange = (inputValue: string) => {
    onChange(inputValue.replace(/\D/g, "").slice(0, MAX_BARCODE_LENGTH));
  };

  return (
    <ModalOverlay onMouseDown={onClose}>
      <ModalDialog
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onMouseDown={(event) => event.stopPropagation()}>
        <ModalTitle id={titleId}>상품번호를 입력하세요</ModalTitle>
        <DigitSlots>
          {Array.from({ length: MAX_BARCODE_LENGTH }, (_, index) => (
            <DigitSlot key={index}>{value[index] ?? ""}</DigitSlot>
          ))}
          <BarcodeInput
            ref={inputRef}
            type="text"
            value={value}
            inputMode="numeric"
            autoComplete="off"
            maxLength={MAX_BARCODE_LENGTH}
            aria-label="8자리, 12자리, 13자리 또는 14자리 상품번호"
            onChange={(event) => handleChange(event.target.value)}
          />
        </DigitSlots>
        <SubmitButton
          type="button"
          disabled={!isSupportedBarcode(value)}
          onClick={onSubmit}>
          조회하기
        </SubmitButton>
      </ModalDialog>
    </ModalOverlay>
  );
}
