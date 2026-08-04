import { useCallback, useRef, useState } from "react";
import { BarcodeScanner } from "react-barcode-scanner";
import type { DetectedBarcode } from "react-barcode-scanner";
import "react-barcode-scanner/polyfill";
import { useNavigate } from "react-router-dom";
import { BarcodeInputModal, Icon } from "../../components/common";
import { MobileFrame } from "../../components/layout";
import { ROUTES } from "../../constants";
import {
  CloseButton,
  ManualEntryButton,
  ScanContent,
  ScannerFrame,
  ScanScreen,
  ScanTitle,
} from "./BarcodeScanPage.style";

const supportedProductFormats = ["ean_13", "ean_8", "upc_a", "upc_e", "code_128"];

export function BarcodeScanPage() {
  const navigate = useNavigate();
  const capturedRef = useRef(false);
  const [paused, setPaused] = useState(false);
  const [isManualEntryOpen, setIsManualEntryOpen] = useState(false);
  const [manualBarcode, setManualBarcode] = useState("");

  const openAnalysis = (barcode: string) => {
    navigate(ROUTES.productAnalysis, { state: { barcode } });
  };

  const handleCapture = (barcodes: DetectedBarcode[]) => {
    const barcode = barcodes.find(({ rawValue }) => rawValue.trim().length > 0);

    if (!barcode || capturedRef.current) {
      return;
    }

    capturedRef.current = true;
    setPaused(true);
    openAnalysis(barcode.rawValue);
  };

  const handleManualEntry = () => {
    setManualBarcode("");
    setIsManualEntryOpen(true);
  };

  const handleCloseManualEntry = useCallback(() => {
    setIsManualEntryOpen(false);
  }, []);

  const handleManualBarcodeChange = (barcode: string) => {
    setManualBarcode(barcode);

    if (barcode.length === 13) {
      setIsManualEntryOpen(false);
      openAnalysis(barcode);
    }
  };

  return (
    <MobileFrame>
      <ScanScreen>
        <CloseButton
          type="button"
          aria-label="바코드 스캔 닫기"
          onClick={() => navigate(ROUTES.home)}>
          <Icon name="close" />
        </CloseButton>
        <ScanContent>
          <ScanTitle>상품의 바코드를 스캔하세요</ScanTitle>
          <ScannerFrame>
            <BarcodeScanner
              paused={paused || isManualEntryOpen}
              options={{ delay: 500, formats: supportedProductFormats }}
              trackConstraints={{ facingMode: { ideal: "environment" } }}
              onCapture={handleCapture}
              aria-label="상품 바코드 카메라 화면"
            />
          </ScannerFrame>
          <ManualEntryButton type="button" onClick={handleManualEntry}>
            <span>직접 상품번호 입력하기</span>
            <Icon name="arrow-forward" />
          </ManualEntryButton>
        </ScanContent>
        {isManualEntryOpen && (
          <BarcodeInputModal
            value={manualBarcode}
            onChange={handleManualBarcodeChange}
            onClose={handleCloseManualEntry}
          />
        )}
      </ScanScreen>
    </MobileFrame>
  );
}
