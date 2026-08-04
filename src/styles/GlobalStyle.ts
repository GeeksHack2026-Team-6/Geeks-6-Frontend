import { Global, css } from "@emotion/react";
import { createElement } from "react";

export function GlobalStyle() {
  return createElement(Global, {
    styles: css`
      :root {
        font-family:
          Pretendard, "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
        color: #111111;
        background: #d4d4d4;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      * {
        box-sizing: border-box;
      }
      html,
      body,
      #root {
        min-width: 320px;
        min-height: 100%;
        margin: 0;
      }
      body {
        min-height: 100svh;
        overflow: hidden;
      }
      button,
      input {
        font: inherit;
      }
      button {
        cursor: pointer;
      }
      button:disabled {
        cursor: not-allowed;
      }
    `,
  });
}
