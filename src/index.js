import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import App from "./components/App/App.jsx";
import store from './redux/store';

import "./index.css";

// console.log('store :>> ', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);