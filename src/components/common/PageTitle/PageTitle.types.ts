import type { ReactNode } from "react";

export type PageTitleSize = "auth" | "home" | "section";
export interface PageTitleProps {
  children: ReactNode;
  as?: "h1" | "h2";
  size?: PageTitleSize;
  id?: string;
}
