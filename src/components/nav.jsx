import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  NavLink,
  Outlet,
  useLocation,
  useResolvedPath,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loggedOut } from "../util/store/auth/authSlice";
import { getNameFromRoute } from "../util/router/routerHelper";
import BreadcrumbsItem from "./breadcrumbs";

export default function Nav(props) {
  const [isDisplay, setIsDisplay] = useState(false);
  const [isSidebarShow, setIsSidebarShow] = useState(false);

  const userInfo = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const resolvePath = useResolvedPath("");

  const isActivePath = location.pathname === resolvePath.pathname;

  const showSidebarMobile = () => {
    setIsSidebarShow(!isSidebarShow);
  };

  const logOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userInfo");
    dispatch(loggedOut());
  };

  return (
    <>
      {/* sidebar */}
      <div className="min-h-screen relative flex">
        <div
          className={`w-60 bg-sidebar absolute md:relative md:translate-x-0
          inset-y-0 left-0 transform ${
            isSidebarShow ? "" : "-translate-x-full"
          } 
         transition duration-200 ease-in-out`}
        >
          <div className="md:flex flex-col justify-center h-24 hidden">
            <p className="text-center text-g text-2xl">
              <FontAwesomeIcon className="fa-fw" icon="dog" size="lg" />
              Nyam IV
            </p>
          </div>
          <div
            onClick={showSidebarMobile}
            className="text-right mt-3 md:hidden"
          >
            <FontAwesomeIcon className="text-g mr-4" icon="times" size="lg" />
          </div>
          <nav className="text-sm font-semibold text-white">
            <NavLink
              to="/home"
              className={({ isActive }) => `${
                isActive ? "bg-red-300" : ""
              } block py-3 px-4 transition duration-150 rounded-lg 
              hover:bg-red-300 active:bg-red-400`}
            >
              <FontAwesomeIcon className="fa-fw" icon="home" size="lg" />
              <span className="pl-8">Home</span>
            </NavLink>
            <NavLink
              to="/dan"
              className={({ isActive }) => `${
                isActive ? "bg-red-300" : ""
              } block py-3 px-4 transition duration-150 rounded-lg 
              hover:bg-red-300 active:bg-red-400`}
            >
              <FontAwesomeIcon className="fa-fw" icon="ambulance" size="lg" />
              <span className="pl-8">Danbo</span>
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) => `${
                isActive ? "bg-red-300" : ""
              } block py-3 px-4 transition duration-150 rounded-lg 
              hover:bg-red-300 active:bg-red-400`}
            >
              <FontAwesomeIcon
                className="fa-fw"
                icon="address-book"
                size="lg"
              />
              <span className="pl-8">Address</span>
            </NavLink>
          </nav>
        </div>
        {/* sidebar */}
        <div className="w-screen md:container flex flex-col">
          <div className="h-24 flex justify-between md:justify-end">
            {/* avatar user */}
            <div className="flex">
              <p onClick={showSidebarMobile} className="self-center md:hidden">
                <FontAwesomeIcon className="fa-fw ml-3" icon="dog" size="2x" />
              </p>
            </div>
            <div className="border-b-4 border-transparent py-3 mr-9 self-center">
              <div
                onClick={() => setIsDisplay(!isDisplay)}
                className="flex justify-center items-center space-x-3 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
                  <img
                    src={userInfo.photoURL}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="font-semibold dark:text-white text-gray-900 text-lg">
                  <div className="cursor-pointer">{userInfo.displayName}</div>
                </div>
              </div>
              <div
                className={`${
                  !isDisplay ? "hidden" : ""
                } absolute w-52 px-5 py-3 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent mt-5`}
              >
                <ul className="space-y-3 dark:text-white">
                  <li className="font-normal">
                    <a
                      href="#"
                      className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-500"
                    >
                      <div className="mr-3">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          ></path>
                        </svg>
                      </div>
                      Profile
                    </a>
                  </li>
                  <hr className="dark:border-gray-700" />
                  <li className="font-normal">
                    <a
                      onClick={logOut}
                      className="flex cursor-pointer items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600"
                    >
                      <div className="mr-3 text-red-600">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          ></path>
                        </svg>
                      </div>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* avatar user */}
          </div>
          <hr />
          <div className="flex-1">
            {/* content */}
            <BreadcrumbsItem text={props.text}/>
            <Outlet />
            {/* content */}
          </div>
        </div>
      </div>
    </>
  );
}
