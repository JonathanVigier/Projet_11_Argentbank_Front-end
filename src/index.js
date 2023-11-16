import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router/Router";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <Router />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
