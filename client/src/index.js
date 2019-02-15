import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "../src/providers/data";
import App from "./App";

ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>,
  document.getElementById("root")
);
