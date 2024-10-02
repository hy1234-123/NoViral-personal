import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/discussion.css';

function Discussion() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductOpinion();
  }, [id]);

  async function fetchProductOpinion() {
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
    <main>
      <section className='discussion-section'>
        <div className='discussion-header'>
          <h2>상품 토론</h2>
          <a href="" role="button">새 의견 등록</a> {/**모달 출력 버튼(예정) */}
        </div>
        {product.opinions.map(opinion => (
          <article key={opinion.date}>
            <p>{opinion.content}</p>
            <small>
              찬 {opinion.upvotes}/반 {opinion.downvotes}&nbsp;
              <time dateTime={opinion.date}>
                {new Date(opinion.date).toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>&nbsp;
              {opinion.author}
            </small>&nbsp;
            <button type="button">반대</button>
            <button type="button">찬성</button>
            <button type="button">신고</button>
          </article>
        ))}
      </section>
      <section className='popular-opinions'>
        <h2>찬성을 많이 받은 의견</h2>
        {product.opinions.slice()
          .sort((a, b) => b.upvotes - a.upvotes)
          .map((opinion, index) => (
            <article key={index}>
              <p>{opinion.content}</p>
              <small>
                #{index + 1}/ 찬 {opinion.upvotes}/반 {opinion.downvotes}&nbsp;
                <time dateTime={opinion.date}>
                  {new Date(opinion.date).toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>&nbsp;
                {opinion.author}
              </small>
            </article>
          ))}
      </section>
    </main>
  );
}

export default Discussion;