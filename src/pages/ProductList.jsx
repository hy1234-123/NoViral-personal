import React, { useState, useRef, useEffect } from "react";
import ProductDisplay from "../components/productDisplay";
import Sidebar from "../components/sidebar";
import productData from "../data/product_data";
import "../css/ProductList.css";

const ProductList = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const productRefs = useRef([]);
  const observerRef = useRef(null);

  const thumbnail = productData.map((product) => ({
    id: product.id,
    thumbnail: product.thumbnail,
  }));

  const handleProductSelect = (productId) => {
    console.log("Product selected:", productId);
    setSelectedProductId(productId);
    scrollToProduct(productId);
  };

  const scrollToProduct = (productId) => {
    console.log("Scrolling to product:", productId);
    const productIndex = productData.findIndex(
      (product) => product.id === productId
    );
    console.log("Product index:", productIndex);
    if (productRefs.current[productIndex]) {
      console.log("Ref found, scrolling...");
      productRefs.current[productIndex].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.log("Ref not found");
    }
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const productId = parseInt(entry.target.dataset.productId);
            setSelectedProductId(productId);
          }
        });
      },
      { threshold: 0.5 }
    );

    productRefs.current.forEach((ref) => {
      if (ref) observerRef.current.observe(ref);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="product-list-page">
      <Sidebar
        thumbnail={thumbnail}
        onProductSelect={handleProductSelect}
        selectedProductId={selectedProductId}
      />
      <div className="product-list-content">
        {productData.map((product, index) => (
          <div
            key={product.id}
            className={`product-item ${index === 0 ? "first-item" : ""}`}
            ref={(el) => {
              productRefs.current[index] = el;
              console.log(`Ref set for product ${product.id}`);
            }}
            data-product-id={product.id}
          >
            <ProductDisplay {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
