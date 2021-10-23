import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#FFFFFF",
    darkBlue: "#0d5f81",
    textGray: "#5A6D72",
    textDarkGray: "#3D4D51"
  },
  fonts: {
    roboto: "Roboto Light,sans-serif",
  },
  fontSizes: {
    s: "14px",
    medium: "16px",
    large: "20px"
  },
  borderRadius: {
    radius: "4px",
  },
  padding: {
    buttonPadding: "8px 16px;"
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;