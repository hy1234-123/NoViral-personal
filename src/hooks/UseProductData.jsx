import { useState, useEffect } from 'react';
import productData from '../../public/data/product_data';

const UseProductData = (id) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const product = productData.find(p => p.id === parseInt(id));
    setProduct(product);
  }, [id]);

  return product;
};

export default UseProductData;