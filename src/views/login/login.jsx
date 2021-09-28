import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./login.css";

import { getLogin } from "../../service/auth";
import { useHistory } from "react-router";

export default function Login() {
  const history = useHistory();

  const handleLogin = async () => {
    const isLogged = await getLogin();
    console.log("[LoginJSX] can log" + isLogged);
    if (isLogged) {
      history.push("/");
    }
  };

  return (
    <div className="bg-login h-screen flex ">
      <div className="m-auto neumor">
        <p className="text-center text-jean text-4xl">
          <FontAwesomeIcon className="fa-fw" icon="dog" size="lg" />
          Nyam IV
        </p>
        <div className="flex h-full">
          <button
            onClick={handleLogin}
            className="bg-red-200 hover:bg-red-300 active:bg-red-400 text-gg text-lg px-4 py-2
          border rounded-full m-auto shadow-lg w-72"
          >
            Sign In With Google
          </button>
        </div>
      </div>
    </div>
  );
}
