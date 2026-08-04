import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants";
import { CartPage } from "../pages/Cart";
import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { MyPage } from "../pages/My";
import { PointsPage } from "../pages/Points";
import { ProductAnalysisPage } from "../pages/ProductAnalysis";
import { SignupPage } from "../pages/SignUp";

const BarcodeScanPage = lazy(() =>
  import("../pages/BarcodeScan").then(({ BarcodeScanPage: Page }) => ({ default: Page }))
);

export function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path={ROUTES.home} element={<HomePage />} />
          <Route path={ROUTES.points} element={<PointsPage />} />
          <Route path={ROUTES.scan} element={<BarcodeScanPage />} />
          <Route path={ROUTES.productAnalysis} element={<ProductAnalysisPage />} />
          <Route path={ROUTES.cart} element={<CartPage />} />
          <Route path={ROUTES.my} element={<MyPage />} />
          <Route path={ROUTES.login} element={<LoginPage />} />
          <Route path={ROUTES.signup} element={<SignupPage />} />
          <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
