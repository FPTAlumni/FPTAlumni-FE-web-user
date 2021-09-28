import { useEffect, useState } from "react";
import { useRoutes } from "react-router";
import { initializeApp } from "@firebase/app";
import { useSelector } from "react-redux";

import logo from "../logo.svg";
import "./App.css";

import Danbooru from "./danbooru/danbooru";
import Home from "./home/home";
import Login from "./login/login";
import router from "../util/router/router";

function App() {
  const firebaseConfig = {
    apiKey: `${import.meta.env.VITE_API_KEY}`,
    authDomain: `${import.meta.env.VITE_AUTH_DOMAIN}`,
    projectId: `${import.meta.env.VITE_PROJECT_ID}`,
  };

  const fbApp = initializeApp(firebaseConfig);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const routing = useRoutes(router(isLoggedIn));

  return (
    <div className="App">
      {routing}
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/dan" component={Danbooru} />
      </Switch> */}
    </div>
  );
}

export default App;
