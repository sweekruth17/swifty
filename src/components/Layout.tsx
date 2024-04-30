// import React from "react";

import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
const Layout = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-primary1 to-primary2 h-screen fixed w-full justify-center items-center p-2 lg:p-4  2xl:p-6  text-white overflow-y-auto">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
