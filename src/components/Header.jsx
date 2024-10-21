import React from "react";
import { NavBar, SubNavBar } from "./";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const hideBComponentRoutes = ["/login", "/discussion/:id", "/"];
  return (
    <header>
      <NavBar />
      {!hideBComponentRoutes.includes(location.pathname) && <SubNavBar />}
    </header>
  );
}
