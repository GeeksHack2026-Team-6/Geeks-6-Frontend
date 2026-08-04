import styled from "@emotion/styled";

export const Navigation = styled.nav`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  height: ${({ theme }) => theme.dimensions.navigationHeight};
  background: ${({ theme }) => theme.colors.white};
`;

export const NavItem = styled.button<{ $active?: boolean }>`
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 1px;
  padding: ${({ theme }) => theme.spacing.xs} 0;
  border: 0;
  color: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.ink)};
  background: transparent;
  font-size: ${({ theme }) => theme.fontSizes.xs};

  ${({ $active }) => $active && "img { filter: invert(47%) sepia(92%) saturate(502%) hue-rotate(92deg) brightness(86%) contrast(91%); }"}
  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 3px;
  }
`;

export const ScanButton = styled.button`
  align-self: center;
  justify-self: center;
  display: grid;
  width: 50px;
  height: 50px;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  transform: translateY(-6px);

  img {
    filter: brightness(0) invert(1);
  }
  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 3px;
  }
`;
