import styled from "@emotion/styled";

export const Viewport = styled.main`
  display: grid;
  height: 100svh;
  place-items: center;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.viewport};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
    background: ${({ theme }) => theme.colors.surface};
  }
`;

export const Device = styled.section`
  position: relative;
  width: min(100%, ${({ theme }) => theme.dimensions.mobileMaxWidth});
  height: min(${({ theme }) => theme.dimensions.mobileMaxHeight}, calc(100svh - 32px));
  overflow-x: hidden;
  overflow-y: auto;
  color: ${({ theme }) => theme.colors.ink};
  background: ${({ theme }) => theme.colors.surface};
  scrollbar-width: thin;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    height: 100svh;
  }

  @media (min-width: ${({ theme }) => `calc(${theme.breakpoints.mobile} + 1px)`}) {
    border: 1px solid ${({ theme }) => theme.colors.frameBorder};
    border-radius: ${({ theme }) => theme.radii.device};
    box-shadow: ${({ theme }) => theme.shadows.device};
  }
`;
