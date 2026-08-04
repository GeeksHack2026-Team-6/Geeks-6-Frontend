export interface NavigationItem {
  label: string;
  icon: "home" | "certified-company" | "points" | "profile";
  active?: boolean;
  onClick?: () => void;
}
