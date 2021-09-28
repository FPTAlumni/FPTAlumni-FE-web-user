import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./views/App";
import "tailwindcss/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faAddressBook,
  faAmbulance,
  faDog,
  faHamburger,
  faAngleDoubleLeft,
  faCaretLeft,
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
  faTimes
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
