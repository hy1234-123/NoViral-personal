import React, { useState } from "react";
import "../css/NavBar.css";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMyInfoOpen, setIsMyInfoOpen] = useState(false);

  const [userCommentsCount, setUserCommentsCount] = useState(311);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleMyInfoEnter = () => {
    setIsMyInfoOpen(true);
  };

  const handleMyInfoLeave = () => {
    setIsMyInfoOpen(false);
  };

  const handleDeleteAccount = () => {
    if (window.confirm("회원탈퇴를 진행하시겠습니까?")) {
      window.location.href = "/delete-account"; // 회원탈퇴 페이지 임의지정
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">
          <a href="/">NOVIRAL</a>
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
                <li className="dropdown-item">
                  <a href="/category1">Keyboard</a>
                </li>
                <li className="dropdown-item">
                  <a href="/category2">Mouse</a>
                </li>
                <li className="dropdown-item">
                  <a href="/category3">Sounds</a>
                </li>
              </ul>
            )}
          </li>

          {/* 로그인 상태에 따른 UI */}
          {!isLoggedIn ? (
            <li className="nav-item">
              <a href="/login" className="nav-link">
                Login
              </a>
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
                    <a href="/my-comments">
                      My opinion{" "}
                      <span className="comment-count">{userCommentsCount}</span>
                    </a>
                  </li>
                  <li className="myinfo-item">
                    <div className="inline-options">
                      <a href="/change-password">비밀번호 변경</a>
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
