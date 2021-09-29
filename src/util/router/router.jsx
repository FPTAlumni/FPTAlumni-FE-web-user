import { Navigate, Outlet } from "react-router-dom";

import Nav from "../../components/nav";
import Danbooru from "../../views/danbooru/danbooru";
import Home from "../../views/home/home";
import Login from "../../views/login/login";
import Notfound from "../../views/notfound/notfound";

import { DANBOORU_ROUTE, HOME_ROUTE } from "./routerHelper";

const router = (isLoggedIn) => [
  {
    path: "/",
    element: isLoggedIn ? <Nav /> : <Navigate to="/login" />,
    children: [
      { path: HOME_ROUTE.path, element: <Home /> },
      { path: DANBOORU_ROUTE.path, element: <Danbooru /> },
    ],
  },
  {
    path: "/login",
    element: !isLoggedIn ? <Login /> : <Navigate to="/" />,
  },
  {
    path: "*",
    element: <Notfound/>,
  },
];

export default router;
