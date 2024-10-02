import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/productDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductData();
  }, [id]);

  async function fetchProductData() {
    try {
      const response = await fetch('/data/products.json');
      const products = await response.json();
      const product = products.find(p => p.id === parseInt(id));
      setProduct(product);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  }

  if (!product) return <p>Loading...</p>;

  return (
    <figure>
      <img src="" alt="상품 이미지" />
      <figcaption>
        <h1>{product.productName}</h1>
        <dl>
          {Object.entries(product.specs).map(([specName, specValue]) => (
            <div key={specName}>
              <dt>{specName}</dt>
              <dd>{specValue}</dd>
            </div>
          ))}
        </dl>
        <p className='product-description'>{product.description}</p>
        <h2>상품 의견</h2>
        <section className="product-opinions">
          {product.opinions && product.opinions.length > 0 ? (
            product.opinions.map((opinion) => (
              <article key={opinion.date} className="opinion">
                <p>{opinion.content}</p>
                <small>
                  작성자: {opinion.author}&nbsp;
                  <time dateTime={opinion.date}>
                    {new Date(opinion.date).toLocaleDateString('ko-KR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </small>
              </article>
            ))
          ) : (
            <p>의견이 없습니다.</p>
          )}
        </section>
      </figcaption>
    </figure>
  );
}

export default ProductDetails;