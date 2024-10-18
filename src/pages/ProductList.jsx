import React, { useState, useRef, useEffect } from 'react';
import ProductDisplay from '../components/productDisplay';
import Sidebar from '../components/sidebar';
import productData from '../data/product_data';
import '../css/ProductList.css';

const ProductList = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const productRefs = useRef([]);
  const observerRef = useRef(null);
  const contentRef = useRef(null);

  const thumbnail = productData.map(product => ({
    id: product.id,
    thumbnail: product.thumbnail
  }));

  const handleProductSelect = (productId) => {
    setSelectedProductId(productId);
    scrollToProduct(productId);
  };

  const scrollToProduct = (productId) => {
    const productIndex = productData.findIndex(product => product.id === productId);
    if (productRefs.current[productIndex] && contentRef.current) {
      const element = productRefs.current[productIndex];
      const containerRect = contentRef.current.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      
      const yOffset = -19;
      const scrollTop = contentRef.current.scrollTop + elementRect.top - containerRect.top + yOffset;
      
      contentRef.current.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });
    } else {
      console.log('Ref not found');
    }
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const productId = parseInt(entry.target.dataset.productId);
          setSelectedProductId(productId);
        }
      });
    }, { threshold: 0.5 });

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
      <div className="product-list-content" ref={contentRef}>
        {productData.map((product, index) => (
          <div 
            key={product.id} 
            className={`product-item ${selectedProductId === product.id ? 'focused' : 'unfocused'}`}
            ref={el => productRefs.current[index] = el}
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