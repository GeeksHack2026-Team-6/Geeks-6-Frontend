export interface NavigationItem {
  label: string;
  icon: "home" | "points-navigation" | "cart" | "profile";
  active?: boolean;
  onClick?: () => void;
}
