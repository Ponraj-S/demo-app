import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId="55316105259-b51ls09ehteokajuq36ov8vgjbid92fk.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
