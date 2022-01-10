import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { mainTheme } from "./App/Theme/mainTheme";

ReactDOM.render(
  <ThemeProvider theme={mainTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
