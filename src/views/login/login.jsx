import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./login.css";

import { getLogin } from "../../service/auth";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loggedIn, setUserInfo } from "../../util/store/auth/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const isLogged = await getLogin();
    console.log("[LoginJSX] can log " + isLogged);

    if (Array.isArray(isLogged) && isLogged[0]) {
      dispatch(loggedIn());
      dispatch(setUserInfo(isLogged[1]));
      navigate("/");
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
