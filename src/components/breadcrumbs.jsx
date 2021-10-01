import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  NavLink,
  Outlet,
  useParams,
  useLocation,
  useResolvedPath,
} from "react-router-dom";

export default function BreadcrumbsItem(props) {
  const { text } = props;
  const location = useLocation();
  const resolvedLocation = useResolvedPath("");
  const isActive = location.pathname === resolvedLocation.pathname;

  return (
    <>
      {isActive ? (
        <span>{text}</span>
      ) : (
        <>
          <NavLink to={resolvedLocation.pathname}>{text}</NavLink>
          <FontAwesomeIcon icon="caret-right"/>
        </>
      )}
    </>
  );
}
