import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Header from "./admin/Header";
import Navbar from "./admin/Navbar";
import Report from "./organiser/Report";
import Schedule from "./organiser/Schedule";
import Requests from "./Requests";
const Organiser = () => {
  
  const Organisernavs = [
    {
      to: "/organiser",
      value: "Requests",
    },
    {
      to: "/organiser/report",
      value: "Report",
    },
  ];
  return (
    <div>
      <Navbar usertype="Organiser" navs={Organisernavs} />
      <Outlet />
    </div>
  );
};
export default Organiser;
