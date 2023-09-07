import React from "react";
import ReactDOM from "react-dom/client";
import App from "./redux/todolist/App";
import { Provider } from "react-redux";
import {store} from "./redux/todolist/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
