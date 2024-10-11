import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProductList = ({ products, setActiveProductIndex }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const productElements = container.querySelectorAll('.product');

    productElements.forEach((product, index) => {
      ScrollTrigger.create({
        trigger: product,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveProductIndex(index),
        onEnterBack: () => setActiveProductIndex(index)
      });
    });
  }, [products, setActiveProductIndex]);

  return (
    <div className="product-list" ref={containerRef}>
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;