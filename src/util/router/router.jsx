import { Navigate, Outlet } from "react-router-dom";
import Nav from "../../components/nav";
import Danbooru from "../../views/danbooru/danbooru";
import Home from "../../views/home/home";
import Login from "../../views/login/login";

const router = (isLoggedIn) => [
  {
    path: "/",
    element: isLoggedIn ? <Nav /> : <Navigate to="/login" />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/dan", element: <Danbooru /> },
    ],
  },
  {
    path: "/login",
    element: !isLoggedIn ? <Login /> : <Navigate to="/" />,
  },
];

export default router;
