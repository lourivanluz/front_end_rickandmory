import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { Providers } from "./providers";
import { GlobalStyle } from "./styles/Global";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <CssBaseline />
        <GlobalStyle />
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
