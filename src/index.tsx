import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./assets/font/font.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
