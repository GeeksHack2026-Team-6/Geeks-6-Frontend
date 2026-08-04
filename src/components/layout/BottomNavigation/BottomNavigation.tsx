import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants";
import { Icon } from "../../common";
import { Navigation, NavItem, ScanButton } from "./BottomNavigation.style";
import type { NavigationItem } from "./BottomNavigation.types";

export function BottomNavigation() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const items: NavigationItem[] = [
    {
      label: "홈",
      icon: "home",
      active: pathname === ROUTES.home,
      onClick: () => navigate(ROUTES.home),
    },
    {
      label: "포인트",
      icon: "points-navigation",
      active: pathname === ROUTES.points,
      onClick: () => navigate(ROUTES.points),
    },
    {
      label: "장바구니",
      icon: "cart",
      active: false,
      onClick: () => window.alert("장바구니 기능은 준비 중입니다."),
    },
    {
      label: "마이",
      icon: "profile",
      active: pathname === ROUTES.login,
      onClick: () => navigate(ROUTES.login),
    },
  ];

  return (
    <Navigation aria-label="주요 메뉴">
      {items.slice(0, 2).map((item) => (
        <NavItem
          key={item.label}
          $active={item.active}
          aria-current={item.active ? "page" : undefined}
          type="button"
          onClick={item.onClick}>
          <Icon name={item.icon} />
          <span>{item.label}</span>
        </NavItem>
      ))}
      <ScanButton
        type="button"
        onClick={() => navigate(ROUTES.scan)}
        aria-label="바코드 스캔">
        <Icon name="camera-scan" />
      </ScanButton>
      {items.slice(2).map((item) => (
        <NavItem
          key={item.label}
          $active={item.active}
          aria-current={item.active ? "page" : undefined}
          type="button"
          onClick={item.onClick}>
          <Icon name={item.icon} />
          <span>{item.label}</span>
        </NavItem>
      ))}
    </Navigation>
  );
}
