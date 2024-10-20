import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Discussion from "./pages/Discussion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./pages/ProductList";
import MainPage from "./pages/MainPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* 메인 페이지가 아닌 경우에만 Header를 렌더링 */}
        {location.pathname !== "/" && <Header />}
        <Route path="/" element={<MainPage />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/discussion/:id" element={<Discussion />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
