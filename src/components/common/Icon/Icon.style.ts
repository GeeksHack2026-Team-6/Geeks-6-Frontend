import styled from "@emotion/styled";

export const IconImage = styled.img<{ $size: number }>`
  display: block;
  flex: 0 0 ${({ $size }) => `${$size}px`};
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  object-fit: contain;
`;
