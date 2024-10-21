import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
import useAlert from "../hooks/UseAlert";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMyInfoOpen, setIsMyInfoOpen] = useState(false);
  const [userCommentsCount, setUserCommentsCount] = useState(311);
  let dropdownTimeout = null; // 드롭다운 타이머 변수

  // 드롭다운 메뉴 열기
  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout); // 타이머 초기화
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300); // 0.3초 지연 후 닫힘
  };

  // MyInfo 드롭다운 관련 핸들러
  const handleMyInfoEnter = () => {
    setIsMyInfoOpen(true);
  };

  const handleMyInfoLeave = () => {
    setIsMyInfoOpen(false);
  };

  // 회원 탈퇴 기능
  const handleDeleteAccount = () => {
    if (window.confirm("회원탈퇴를 진행하시겠습니까?")) {
      window.location.href = "/delete-account"; // 회원탈퇴 페이지 임의 지정
    }
  };

  // 로그아웃 기능
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const showAlert = useAlert();

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">
          <Link to="/">NOVIRAL</Link>
        </div>
        <ul className="nav-links">
          {/* PRODUCT 드롭다운 */}
          <li
            className="nav-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="nav-link">
              Product
            </a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li className="dropdown-item" onClick={showAlert}>
                  <Link to="#">Keyboard</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/productList">Mouse</Link>
                </li>
                <li className="dropdown-item" onClick={showAlert}>
                  <Link to="#">Sounds</Link>
                </li>
              </ul>
            )}
          </li>

          {/* 로그인 상태에 따른 UI */}
          {!isLoggedIn ? (
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          ) : (
            <li
              className="nav-item"
              onMouseEnter={handleMyInfoEnter}
              onMouseLeave={handleMyInfoLeave}
            >
              <a href="#" className="nav-link">
                MyInfo
              </a>
              {isMyInfoOpen && (
                <ul className="myinfo-menu">
                  <li className="myinfo-item">
                    <Link to="#">
                      My opinion{" "}
                      <span className="comment-count">{userCommentsCount}</span>
                    </Link>
                  </li>
                  <li className="myinfo-item">
                    <div className="inline-options">
                      <Link to="#">비밀번호 변경</Link>
                      <a href="#" onClick={handleDeleteAccount}>
                        회원탈퇴
                      </a>
                    </div>
                  </li>
                  <li className="myinfo-item">
                    <a href="#" onClick={handleLogout}>
                      로그아웃
                    </a>
                  </li>
                </ul>
              )}
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
