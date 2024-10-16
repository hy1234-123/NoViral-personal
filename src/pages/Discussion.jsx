import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Modal } from '../components';
import '../css/productDetails.css'; // 상품 상세 정보와 스타일 공유

function Discussion() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
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

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType('');
  };

  const addOpinion = (newOpinion) => {
    const updatedProduct = {
      ...product,
      opinions: [...product.opinions, newOpinion]
    };
    setProduct(updatedProduct);
  };

  const goToDetails = () => {
    navigate(`/details/${id}`); // '/details/:id'로 이동
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
          <Button text="← 상품 상세 페이지로 이동" onClick={() => goToDetails()} className='custom-button white' />
        </div>
      </section>

      <section className='discussion-section'>
        <div className='discussion-header'>
          <h2>상품 토론</h2>
          <a href="" role="button" onClick={(e) => { e.preventDefault(); openModal('newOpinion'); }}>
            새 의견 등록
          </a>
        </div>
        {product.opinions.slice().reverse().map(opinion => (
          <article key={opinion.date}>
            <p>{opinion.content}</p>
            <div className='opinion-footer'>
              <small>
                {/* 찬 {opinion.upvotes}/반 {opinion.downvotes}&nbsp; */}
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
              <div className="vote-buttons">
                <Button text="찬성" className='vote upvote' />
                <Button text="반대" className='vote downvote' />
                <Button text="0" onClick={() => openModal('report')} className='vote report' />
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Modal 컴포넌트 사용 */}
      <Modal isOpen={modalOpen} onClose={closeModal} type={modalType} addOpinion={addOpinion} />
    </main>
  );
}

export default Discussion;