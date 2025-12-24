import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeProvider from "./context/ThemeContext.jsx";
import BackgroundMusic from "./helper/BackgroundMusic.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
    <BackgroundMusic />
  </ThemeProvider>
);
