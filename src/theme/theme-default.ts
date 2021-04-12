import { Theme } from "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    palette: {
      textDefault: string;
      white: string;
      black: string;
      background: string;
    };
    shapes: {
      borderRadius: string | number;
    };
  }
}

export const defaultTheme: Theme = {
  palette: {
    textDefault: "#222",
    white: "#fff",
    black: "#222",
    background: "var(--background-color)",
  },
  shapes: {
    borderRadius: 15,
  },
};
