// react
import { StrictMode } from "react";

// react-dom/client
import { createRoot } from "react-dom/client";

// styles
import "./index.scss";

// apps
import { MainApp } from "./apps/MainApp";

// reportWebVitals
import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <MainApp />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
