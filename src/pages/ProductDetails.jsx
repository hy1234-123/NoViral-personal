import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../components';
import '../css/productDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate(); // useNavigate 훅 사용

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

  const goToDiscussion = () => {
    navigate(`/discussion/${id}`); // '/discussion/:id'로 이동
  };

  if (!product) return <p>Loading...</p>;

  return (
    <main>
      <section className="product-overview">
        <article className='product-info'>
          <h2>{product.productName}</h2>
          <dl>
            {Object.entries(product.specs).map(([specName, specValue]) => (
              <div key={specName}>
                <dt>{specName}</dt>
                <dd>{specValue}</dd>
              </div>
            ))}
          </dl>
        </article>
        <div className='popular-opinions'>
          <h2>찬성을 많이 받은 상품 의견</h2>
          {product.opinions.slice()
            .sort((a, b) => b.upvotes - a.upvotes)
            .map((opinion, index) => (
              <article key={index}>
                <p>{opinion.content}</p>
                <small>
                  {/* #{index + 1}/ 찬 {opinion.upvotes}/반 {opinion.downvotes}&nbsp; */}
                  <time dateTime={opinion.date}>
                    {new Date(opinion.date).toLocaleDateString('ko-KR', {
                      year: '2-digit',
                      month: '2-digit',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                      hour12: false,
                    })}
                  </time>
                  <span>{opinion.author}</span>
                </small>
              </article>
            ))}
          <Button text="상품 의견 제시" onClick={() => goToDiscussion()}/>
        </div>
      </section>

      <section className='discussion-section'>
        <img/>
      </section>
    </main>
  );
}

export default ProductDetails