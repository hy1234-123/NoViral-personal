import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Discussion from "./pages/Discussion";
import Footer from "./components/Footer";
import ProductList from "./pages/ProductList";
import MainPage from "./pages/MainPage";
import Login from "./pages/LoginPage";
import Header from "./components/Header"; // 헤더가 안보이도록 조건 추가

import "./App.css";

function Layout() {
  const location = useLocation(); // 현재 경로 정보를 가져옴
  const hideHeaderRoutes = ["/login"]; // 특정 경로에서 Header 숨김
  const showFooterRoutes = ["/", ""];

  return (
    <>
      {/* Header는 hideHeaderRoutes에 해당하지 않을 때만 렌더링 */}
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/discussion/:id" element={<Discussion />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {showFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout /> {/* useLocation을 Router 안에서 사용 */}
    </Router>
  );
}

export default App;
