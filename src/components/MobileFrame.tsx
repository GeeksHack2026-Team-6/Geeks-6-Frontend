import type { ReactNode } from "react";

interface MobileFrameProps {
  children: ReactNode;
  className?: string;
}

export function MobileFrame({ children, className = "" }: MobileFrameProps) {
  return (
    <main className="viewport">
      <section className={`mobile-frame ${className}`}>{children}</section>
    </main>
  );
}
