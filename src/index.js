import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./components/App/App.jsx";

// Provider to connect react components with the redux store
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
