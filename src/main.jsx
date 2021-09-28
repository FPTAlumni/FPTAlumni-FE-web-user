import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./views/App";
import "tailwindcss/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faAddressBook,
  faAmbulance,
  faDog,
} from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faAddressBook, faAmbulance, faDog);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
