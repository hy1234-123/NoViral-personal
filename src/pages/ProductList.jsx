import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import ProductDisplay from "../components/productDisplay";
import Sidebar from "../components/Sidebar";
import "../css/ProductList.css";

const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productRefs = useRef([]);
  const observerRef = useRef(null);
  const contentRef = useRef(null);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/products");
        setProductData(response.data);
        if (response.data.length > 0) {
          setSelectedProductId(response.data[0].id);
          setSelectedProduct(response.data[0]);
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProducts();
  }, []);

  const thumbnail = productData.map((product) => ({
    id: product.id,
    thumbnail: product.thumbnail,
  }));

  const handleProductSelect = (productId) => {
    setSelectedProductId(productId);
    const selectedProduct = productData.find(
      (product) => product.id === productId
    );
    setSelectedProduct(selectedProduct);
    scrollToProduct(productId);
  };

  const scrollToProduct = (productId) => {
    const productIndex = productData.findIndex(
      (product) => product.id === productId
    );
    const element = productRefs.current[productIndex];

    if (element && contentRef.current) {
      const headerHeight = 114;
      const containerRect = contentRef.current.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      const relativeTop =
        elementRect.top - containerRect.top + contentRef.current.scrollTop;

      contentRef.current.scrollTo({
        top: relativeTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const productId = parseInt(entry.target.dataset.productId);
            const scrollTop = contentRef.current.scrollTop;
            const scrollDirection =
              scrollTop > lastScrollTop.current ? "down" : "up";
            lastScrollTop.current = scrollTop;

            if (
              entry.intersectionRatio >= 0.6 &&
              entry.intersectionRatio <= 0.8
            ) {
              setSelectedProductId(productId);
              const visibleProduct = productData.find(
                (product) => product.id === productId
              );
              setSelectedProduct(visibleProduct);
            }
          }
        });
      },
      {
        threshold: [0.6, 0.8],
        root: contentRef.current,
      }
    );

    productRefs.current.forEach((ref) => {
      if (ref) observerRef.current.observe(ref);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [productData]);

  return (
    <div className="product-list-page">
      <Sidebar
        thumbnail={thumbnail}
        onProductSelect={handleProductSelect}
        selectedProductId={selectedProductId}
      />
      <div className="product-list-content" ref={contentRef}>
        {productData.map((product, index) => (
          <div
            key={product.id}
            className={`product-item ${
              selectedProductId === product.id ? "focused" : "unfocused"
            }`}
            ref={(el) => (productRefs.current[index] = el)}
            data-product-id={product.id}
          >
            <ProductDisplay
              {...product}
              isSelected={selectedProductId === product.id}
              selectedProduct={selectedProduct}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
