import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants";
import { Icon } from "../../common";
import { Navigation, NavItem, ScanButton } from "./BottomNavigation.style";
import type { NavigationItem } from "./BottomNavigation.types";

export function BottomNavigation() {
  const navigate = useNavigate();
  const items: NavigationItem[] = [
    { label: "홈", icon: "home", active: true },
    { label: "인증기업", icon: "certified-company" },
    { label: "포인트", icon: "points" },
    { label: "마이", icon: "profile", onClick: () => navigate(ROUTES.login) },
  ];

  return (
    <Navigation aria-label="주요 메뉴">
      {items.slice(0, 2).map((item) => (
        <NavItem
          key={item.label}
          $active={item.active}
          type="button"
          onClick={item.onClick}>
          <Icon name={item.icon} />
          <span>{item.label}</span>
        </NavItem>
      ))}
      <ScanButton
        type="button"
        onClick={() => window.alert("상품 검색 기능은 준비 중입니다.")}
        aria-label="상품 검색">
        <Icon name="camera-scan" />
      </ScanButton>
      {items.slice(2).map((item) => (
        <NavItem
          key={item.label}
          $active={item.active}
          type="button"
          onClick={item.onClick}>
          <Icon name={item.icon} />
          <span>{item.label}</span>
        </NavItem>
      ))}
    </Navigation>
  );
}
