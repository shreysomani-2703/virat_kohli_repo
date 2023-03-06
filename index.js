import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { ConfigureStore } from "./Redux/ConfigureStore";

const store = ConfigureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="">
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </div>
);
