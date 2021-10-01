import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../util/store/counter/counterSlice";
import { useLocation, useResolvedPath } from "react-router";

import BreadcrumbsItem from "../../components/breadcrumbs";

import "./home.css";

export default function Home(props) {
  const { text } = props;
  const location = useLocation();
  const resolvedLocation = useResolvedPath("");
  const isActive = location.pathname === resolvedLocation.pathname;
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      {/* <div>{count}</div>
      <button onClick={() => dispatch(increment())}>Plus</button> */}
      <BreadcrumbsItem text={text}/>
      <div className="content-card mx-3">
        <div className="m-3 flex flex-wrap">
          <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
            <div className="overflow-x-hidden rounded-2xl relative">
              <img
                className="h-40 rounded-2xl w-full object-cover"
                src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg"
              />
            </div>
            <div className="mt-4 pl-2 mb-2 flex justify-between ">
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-0">
                  Product Name
                </p>
                <p className="text-md text-gray-800 mt-0">$340</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
