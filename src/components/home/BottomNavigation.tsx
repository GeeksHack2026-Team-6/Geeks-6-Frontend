import { useNavigate } from "react-router-dom";
import { Icon } from "../Icon";

export function BottomNavigation() {
  const navigate = useNavigate();

  return (
    <nav className="bottom-navigation" aria-label="주요 메뉴">
      <button className="nav-item active" type="button"><Icon name="home.svg" /><span>홈</span></button>
      <button className="nav-item" type="button"><Icon name="certified-company.svg" /><span>인증기업</span></button>
      <button className="scan-button" type="button" onClick={() => window.alert("상품 검색 기능을 준비 중입니다.")} aria-label="상품 검색"><Icon name="camera-scan.svg" /></button>
      <button className="nav-item" type="button"><Icon name="points.svg" /><span>포인트</span></button>
      <button className="nav-item" type="button" onClick={() => navigate("/login")}><Icon name="profile.svg" /><span>마이</span></button>
    </nav>
  );
}
