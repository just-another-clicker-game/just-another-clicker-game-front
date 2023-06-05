import GlobalStyle from "./assets/GlobalStyle";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import { AuthProvider } from "./provider/provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
