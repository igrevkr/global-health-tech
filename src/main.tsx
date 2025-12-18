import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";

// Suppress MetaMask browser extension errors (not related to this app)
if (typeof window !== 'undefined' && window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false;
  const originalConsoleError = console.error;
  console.error = (...args: unknown[]) => {
    const message = args[0];
    if (typeof message === 'string' && message.includes('MetaMask')) {
      return;
    }
    originalConsoleError.apply(console, args);
  };
}

const basename = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
