import { useState, useEffect } from 'react';

const UseProductData = (id) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('/data/products.json');
        const products = await response.json();
        const product = products.find(p => p.id === parseInt(id));
        setProduct(product);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
    fetchProductData();
  }, [id]);

  return product;
};

export default UseProductData;