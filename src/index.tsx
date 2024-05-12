import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
// @ts-ignore
import AlertTemplate from 'react-alert-template-basic'

const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    transition: transitions.SCALE
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <AlertProvider template={AlertTemplate} {...options}>
              <App />
          </AlertProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
