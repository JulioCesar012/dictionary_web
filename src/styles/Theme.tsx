import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { metrics } from "./metrics";

const { defaultSpace } = metrics;

export const space = [
  0,
  ...Array.from({ length: 12 }, (_, k) => defaultSpace(k + 1)),
];

export const colors = {
  "background-azul/primary-base": "#0E1630",
  "cinza/neutral": "#808DAD",
  "azul-escuro/secondary-base": "#171F38",
  "azul-escuro/tertiary-base": "#808DAD68",
  "azul-escuro/fourth-base": "#171F3897",
  "verde-claro": "#01D293",
  "background/flash-icon": "#6d708da3",
  "verde-escuro": "#01D29344",
  border: "#808DAD49",
  "scrollbar-border": "#0D1222",
  "background/cinza": "#808DAD26",
  "background/icon": "#01D29338",
  "feedback-warning": "#F1AE2F",
  "feedback-critical-error": "#B71C1C",
  "white/neutral-0": "#FFF",
  transparent: "transparent",
};

export const theme = {
  colors,
  space
};

export const ThemeProvider = ({ children }) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
