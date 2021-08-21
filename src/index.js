import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
const switchBox = document.querySelector(".sun-moon");

document.querySelector("input").addEventListener("change", (e) => {
  const { checked } = e.target;
  if (checked) {
    switchBox.classList.add("move");
  } else {
    switchBox.classList.remove("move");
  }
});
