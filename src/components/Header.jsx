import React from "react";
import { NavBar, SubNavBar } from "./";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation(); // 현재 경로 가져오기

  return (
    <header style={{ height: location.pathname === "/" ? "0px" : "auto" }}>
      <NavBar /> {/* 모든 페이지에서 NavBar 렌더링 */}
      {location.pathname !== "/" && <SubNavBar />}{" "}
      {/* 메인 페이지가 아닌 경우에만 SubNavBar 렌더링 */}
    </header>
  );
}
