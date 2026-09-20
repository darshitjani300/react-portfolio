import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeProvider from "./context/ThemeContext.jsx";
import AudioProvider from "./context/AudioContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AudioProvider>
        <App />
      </AudioProvider>
    </ThemeProvider>
  </StrictMode>
);
