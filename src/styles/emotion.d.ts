import "@emotion/react";
import type { AppTheme } from "./theme";

declare module "@emotion/react" {
  export interface Theme {
    colors: AppTheme["colors"];
    fontSizes: AppTheme["fontSizes"];
    fontWeights: AppTheme["fontWeights"];
    lineHeights: AppTheme["lineHeights"];
    spacing: AppTheme["spacing"];
    dimensions: AppTheme["dimensions"];
    radii: AppTheme["radii"];
    shadows: AppTheme["shadows"];
    breakpoints: AppTheme["breakpoints"];
  }
}
