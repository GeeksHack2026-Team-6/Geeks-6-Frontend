import { Heading } from "./PageTitle.style";
import type { PageTitleProps } from "./PageTitle.types";

export function PageTitle({ children, as = "h1", size = "auth", id }: PageTitleProps) {
  return (
    <Heading as={as} $size={size} id={id}>
      {children}
    </Heading>
  );
}
