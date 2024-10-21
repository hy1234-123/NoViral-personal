import React from 'react';
import { Button, SteppedCorner } from './';
import '../css/productDetails.css';

const ProductOverview = ({ product, id, buttonText, buttonAction }) => {
  if (!product) return <p>Loading...</p>;

  return (
    <section className="product-overview">
      <article className='product-info'>
        <h2><span>#{id} </span>{product.product_name}</h2>
        <dl>
          <div><dt>세로 </dt><dd>{product.height}</dd></div>
          <div><dt>가로 </dt><dd>{product.depth}</dd></div>
          <div><dt>높이 </dt><dd>{product.width}</dd></div>
          <div><dt>무게 </dt><dd>{product.weight}</dd></div>
          <div><dt>색상 </dt><dd>{product.color}</dd></div>
        </dl>
        <div>{product.description}</div>
      </article>
      <SteppedCorner />
      <div className='popular-opinions'>
        <h2>찬성을 많이 받은 상품 의견</h2>
        {product.opinions.slice()
          .sort((a, b) => b.upvotes - a.upvotes)
          .slice(0, 3) // 상위 3개의 의견만 표시
          .map((opinion, index) => (
            <article key={index}>
              <p>{opinion.content}</p>
              <small>
                <time dateTime={opinion.date}>
                  {new Date(opinion.date).toLocaleDateString('ko-KR', {
                    year: '2-digit',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false,
                  }).replace(/(\d{2})\. (\d{2})\. (\d{2})\. /, '$1-$2-$3 ')}
                </time>
                <span>{opinion.author}</span>
              </small>
            </article>
          ))}
        <Button onClick={buttonAction}>{buttonText}</Button>
      </div>
    </section>
  );
};

export default ProductOverview;