import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import Sidebar from './Sidebar';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('url/products');
        setProducts(response.data);
      } catch (error) {
        setError('Failed to fetch products: ' + (error.response?.data?.message || error.message));
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="product-page">
      <ProductList 
        products={products} 
        setActiveProductIndex={setActiveProductIndex} 
      />
      <Sidebar 
        products={products} 
        activeProductIndex={activeProductIndex} 
      />
    </div>
  );
};

export default ProductPage;