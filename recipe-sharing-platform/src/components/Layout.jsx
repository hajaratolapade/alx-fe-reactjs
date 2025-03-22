import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navbar /> {/* Stays visible across all pages */}
      <main className="p-4">
        <Outlet /> {/* Dynamically renders the child routes */}
      </main>
    </div>
  );
};

export default Layout;
