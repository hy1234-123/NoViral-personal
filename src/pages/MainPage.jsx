import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import CloseButton from "../components/CloseButton.jsx";
import "./MainPage.css";

function MainPage() {
  const [isNoticeVisible, setIsNoticeVisible] = useState(true);
  const notice = "좌측으로 무한으로 애니메이션됩니다.";
  const noticeRef = useRef();

  const beginnerProductContainerRef = useRef();
  const intermediateProductContainerRef = useRef();
  const highEndProductContainerRef = useRef();
  const [visibleProducts, setVisibleProducts] = useState(5);

  useEffect(() => {
    const noticeElement = noticeRef.current;
    if (noticeElement) {
      noticeElement.classList.add("animate");
    }

    return () => {
      if (noticeElement) {
        noticeElement.classList.remove("animate");
      }
    };
  }, []);

  useEffect(() => {
    const updateVisibleProducts = (containerRef) => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const productWidth = 398;
        const gap = 48;
        const maxVisible = Math.floor(
          (containerWidth + gap) / (productWidth + gap)
        );
        setVisibleProducts(Math.min(maxVisible, 5));
      }
    };

    updateVisibleProducts(beginnerProductContainerRef);
    updateVisibleProducts(intermediateProductContainerRef);
    updateVisibleProducts(highEndProductContainerRef);
    window.addEventListener("resize", () => {
      updateVisibleProducts(beginnerProductContainerRef);
      updateVisibleProducts(intermediateProductContainerRef);
      updateVisibleProducts(highEndProductContainerRef);
    });

    return () => {
      window.removeEventListener("resize", () => {
        updateVisibleProducts(beginnerProductContainerRef);
        updateVisibleProducts(intermediateProductContainerRef);
        updateVisibleProducts(highEndProductContainerRef);
      });
    };
  }, []);

  const handleCloseNotice = () => {
    setIsNoticeVisible(false);
  };

  const beginnerProducts = [
    {
      id: 1,
      name: "#1 Logitech Intermediate-Advanced",
      priceNew: 100000,
      priceUsed: 50000,
      imageUrl: "https://tinyurl.com/yc383kfs",
    },
    {
      id: 2,
      name: "#2 Logitech Intermediate-Advanced",
      priceNew: 200000,
      priceUsed: 100000,
      imageUrl: "https://tinyurl.com/yc383kfs",
    },
    {
      id: 3,
      name: "#3 Logitech Intermediate-Advanced",
      priceNew: 300000,
      priceUsed: 150000,
      imageUrl: "https://tinyurl.com/yc383kfs",
    },
    {
      id: 4,
      name: "#4 Logitech Intermediate-Advanced",
      priceNew: 400000,
      priceUsed: 200000,
      imageUrl: "https://tinyurl.com/yc383kfs",
    },
    {
      id: 5,
      name: "#5 Logitech Intermediate-Advanced",
      priceNew: 500000,
      priceUsed: 250000,
      imageUrl: "https://tinyurl.com/yc383kfs",
    },
  ];

  const intermediateProducts = [
    {
      id: 7,
      name: "#1 Logitech High-End ",
      priceNew: 700000,
      priceUsed: 350000,
      imageUrl: "https://tinyurl.com/yc383kfs",
    },
    {
      id: 8,
      name: "#2 Logitech High-End",
      priceNew: 800000,
      priceUsed: 400000,
      imageUrl: "https://tinyurl.com/yc383kfs",
    },
    {
      id: 9,
      name: "#3 Logitech High-End",
      priceNew: 900000,
      priceUsed: 450000,
      imageUrl: "https://tinyurl.com/yc383kfs",
    },
    {
      id: 10,
      name: "#4 Logitech High-End",
      priceNew: 1000000,
      priceUsed: 500000,
      imageUrl: "https://tinyurl.com/yc383kfs",
    },
    {
      id: 11,
      name: "#5 Logitech High-End",
      priceNew: 1100000,
      priceUsed: 550000,
      imageUrl: "https://tinyurl.com/yc383kfs",
    },
  ];

  const highEndProducts = [
    {
      id: 13,
      name: "#1 Logitech Beginner",
      priceNew: 1300000,
      priceUsed: 650000,
      imageUrl: "https://tinyurl.com/yc383kfs",
    },
    {
      id: 14,
      name: "#2 Logitech Beginner",
      priceNew: 1400000,
      priceUsed: 700000,
      imageUrl: "https://tinyurl.com/yc383kfs",
    },
    {
      id: 15,
      name: "#3 Logitech Beginner",
      priceNew: 1500000,
      priceUsed: 750000,
      imageUrl: "https://tinyurl.com/yc383kfs",
    },
    {
      id: 16,
      name: "#4 Logitech Beginner",
      priceNew: 1600000,
      priceUsed: 800000,
      imageUrl: "https://tinyurl.com/yc383kfs",
    },
    {
      id: 17,
      name: "#5 Logitech Beginner",
      priceNew: 1700000,
      priceUsed: 850000,
      imageUrl: "https://tinyurl.com/yc383kfs",
    },
  ];

  const [beginnerIndex, setBeginnerIndex] = useState(0);
  const [intermediateIndex, setIntermediateIndex] = useState(0);
  const [highEndIndex, setHighEndIndex] = useState(0);

  const nextSlide = (products, currentIndex, setIndex) => {
    const maxIndex = products.length - visibleProducts;

    if (currentIndex < maxIndex) {
      setIndex(currentIndex + 1);
    }
  };

  const prevSlide = (currentIndex, setIndex) => {
    if (currentIndex > 0) {
      setIndex(currentIndex - 1);
    }
  };

  return (
    <div className="main-container">
      <header>
        <Navbar />
      </header>

      {isNoticeVisible && (
        <div className="notice-bar">
          <div className="notice-text-wrapper">
            <p className="notice-text" ref={noticeRef}>
              {notice}
            </p>
          </div>
          <CloseButton onClick={handleCloseNotice} style={{ color: "white" }} />
        </div>
      )}

      <main>
        <section className="slide-section">
          <div className="slide-content">
            <img
              src="https://tinyurl.com/bdern5xh"
              alt="사이트 소개 슬라이드"
              className="slide-image"
            />
          </div>
        </section>

        <section className="popular-category">
          <div className="popular-category-header">
            <h2>현재 인기 카테고리</h2>
          </div>
          <div className="category-section">
            <div className="left-container">
              <div className="category-text">
                <p>키보드</p>
                <p className="user-level">중상급</p>
              </div>

              <div className="arrow-container">
                <button
                  className={`arrow-btn ${
                    beginnerIndex === 0 ? "disabled" : ""
                  }`}
                  onClick={() => prevSlide(beginnerIndex, setBeginnerIndex)}
                  disabled={beginnerIndex === 0}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="custom-arrow"
                  >
                    <line x1="4" y1="16" x2="28" y2="16" />
                    <polyline points="12 10 4 16 12 22" />
                  </svg>
                </button>
                <button
                  className={`arrow-btn ${
                    beginnerIndex >= beginnerProducts.length - visibleProducts
                      ? "disabled"
                      : ""
                  }`}
                  onClick={() =>
                    nextSlide(beginnerProducts, beginnerIndex, setBeginnerIndex)
                  }
                  disabled={
                    beginnerIndex >= beginnerProducts.length - visibleProducts
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="custom-arrow"
                  >
                    <line x1="4" y1="16" x2="28" y2="16" />
                    <polyline points="20 10 28 16 20 22" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="right-container" ref={beginnerProductContainerRef}>
              <div
                className="product-grid"
                style={{
                  transform: `translateX(-${beginnerIndex * (398 + 48)}px)`,
                  transition: "transform 0.5s ease",
                }}
              >
                {beginnerProducts.map((item) => (
                  <div key={item.id} className="product-card">
                    <img
                      src={item.imageUrl}
                      alt={`상품 ${item.id}`}
                      className="product-image"
                    />
                    <div className="product-info">
                      <h3>
                        <span style={{ color: "#FF9900" }}>
                          {item.name.split(" ")[0]}
                        </span>
                        {item.name.slice(item.name.indexOf(" "))}
                      </h3>
                      <p>
                        <span className="new-price">신품 가격</span>{" "}
                        {item.priceNew.toLocaleString()} KRW
                      </p>
                      <p>
                        <span className="used-price">중고 가격</span>{" "}
                        {item.priceUsed.toLocaleString()} KRW
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="stair-shape">
                <svg
                  width="72"
                  height="72"
                  viewBox="0 0 72 73"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 1H0V25V49V73H24H48H72V49H48V25H24V1Z"
                    fill="white"
                    stroke="#BCC4D0"
                    strokeidth="1"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="popular-category">
          <div className="category-section">
            <div className="left-container">
              <div className="category-text">
                <p>키보드</p>
                <p className="user-level">하이엔드</p>
              </div>

              <div className="arrow-container">
                <button
                  className={`arrow-btn ${
                    intermediateIndex === 0 ? "disabled" : ""
                  }`}
                  onClick={() =>
                    prevSlide(intermediateIndex, setIntermediateIndex)
                  }
                  disabled={intermediateIndex === 0}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="custom-arrow"
                  >
                    <line x1="4" y1="16" x2="28" y2="16" />
                    <polyline points="12 10 4 16 12 22" />
                  </svg>
                </button>

                <button
                  className={`arrow-btn ${
                    intermediateIndex >=
                    intermediateProducts.length - visibleProducts
                      ? "disabled"
                      : ""
                  }`}
                  onClick={() =>
                    nextSlide(
                      intermediateProducts,
                      intermediateIndex,
                      setIntermediateIndex
                    )
                  }
                  disabled={
                    intermediateIndex >=
                    intermediateProducts.length - visibleProducts
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="custom-arrow"
                  >
                    <line x1="4" y1="16" x2="28" y2="16" />
                    <polyline points="20 10 28 16 20 22" />
                  </svg>
                </button>
              </div>
            </div>

            <div
              className="right-container"
              ref={intermediateProductContainerRef}
            >
              <div
                className="product-grid"
                style={{
                  transform: `translateX(-${intermediateIndex * (398 + 48)}px)`,
                  transition: "transform 0.5s ease",
                }}
              >
                {intermediateProducts.map((item) => (
                  <div key={item.id} className="product-card">
                    <img
                      src={item.imageUrl}
                      alt={`상품 ${item.id}`}
                      className="product-image"
                    />
                    <div className="product-info">
                      <h3>
                        <span style={{ color: "#FF9900" }}>
                          {item.name.split(" ")[0]}
                        </span>
                        {item.name.slice(item.name.indexOf(" "))}
                      </h3>
                      <p>
                        <span className="new-price">신품 가격</span>{" "}
                        {item.priceNew.toLocaleString()} KRW
                      </p>
                      <p>
                        <span className="used-price">중고 가격</span>{" "}
                        {item.priceUsed.toLocaleString()} KRW
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="stair-shape">
                <svg
                  width="72"
                  height="72"
                  viewBox="0 0 72 73"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 1H0V25V49V73H24H48H72V49H48V25H24V1Z"
                    fill="white"
                    stroke="#BCC4D0"
                    stroke-width="1"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="popular-category">
          <div className="category-section">
            <div className="left-container">
              <div className="category-text">
                <p>마우스</p>
                <p className="user-level">입문용</p>
              </div>

              <div className="arrow-container">
                <button
                  className={`arrow-btn ${
                    highEndIndex === 0 ? "disabled" : ""
                  }`}
                  onClick={() => prevSlide(highEndIndex, setHighEndIndex)}
                  disabled={highEndIndex === 0}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="custom-arrow"
                  >
                    <line x1="4" y1="16" x2="28" y2="16" />
                    <polyline points="12 10 4 16 12 22" />
                  </svg>
                </button>

                <button
                  className={`arrow-btn ${
                    highEndIndex >= highEndProducts.length - visibleProducts
                      ? "disabled"
                      : ""
                  }`}
                  onClick={() =>
                    nextSlide(highEndProducts, highEndIndex, setHighEndIndex)
                  }
                  disabled={
                    highEndIndex >= highEndProducts.length - visibleProducts
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="custom-arrow"
                  >
                    <line x1="4" y1="16" x2="28" y2="16" />
                    <polyline points="20 10 28 16 20 22" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="right-container" ref={highEndProductContainerRef}>
              <div
                className="product-grid"
                style={{
                  transform: `translateX(-${highEndIndex * (398 + 48)}px)`,
                  transition: "transform 0.5s ease",
                }}
              >
                {highEndProducts.map((item) => (
                  <div key={item.id} className="product-card">
                    <img
                      src={item.imageUrl}
                      alt={`상품 ${item.id}`}
                      className="product-image"
                    />
                    <div className="product-info">
                      <h3>
                        <span style={{ color: "#FF9900" }}>
                          {item.name.split(" ")[0]}
                        </span>
                        {item.name.slice(item.name.indexOf(" "))}
                      </h3>
                      <p>
                        <span className="new-price">신품 가격</span>{" "}
                        {item.priceNew.toLocaleString()} KRW
                      </p>
                      <p>
                        <span className="used-price">중고 가격</span>{" "}
                        {item.priceUsed.toLocaleString()} KRW
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="stair-shape">
                <svg
                  width="72"
                  height="72"
                  viewBox="0 0 72 73"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 1H0V25V49V73H24H48H72V49H48V25H24V1Z"
                    fill="white"
                    stroke="#BCC4D0"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default MainPage;
