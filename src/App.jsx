import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import Discussion from './pages/Discussion';
import Header from './components/Header';
import Footer from './components/Footer';
import './App1.css';  // 공통 레이아웃 스타일

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/discussion/:id" element={<Discussion />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;