import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Provider } from "react-redux";

import App from "./views/App";
import store from "./util/store/store";

import "./index.css";
import "tailwindcss/tailwind.css";

import {
  faHome,
  faAddressBook,
  faAmbulance,
  faDog,
  faHamburger,
  faAngleDoubleLeft,
  faCaretLeft,
  faCaretRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faHome,
  faAddressBook,
  faAmbulance,
  faDog,
  faHamburger,
  faAngleDoubleLeft,
  faCaretLeft,
  faCaretRight,
  faTimes,
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
