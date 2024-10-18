import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Modal, SteppedCorner } from '../components';
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
          <h2><span>#{id} </span>{product.productName}</h2>
          <dl>
            {Object.entries(product.specs).map(([specName, specValue]) => (
              specName !== '옵션' && (
                <div key={specName}>
                  <dt>{specName} </dt>
                  <dd>{Array.isArray(specValue) ? specValue.join(', ') : specValue}</dd>
                </div>
              )
            ))}
          </dl>
          <div>{product.specs.옵션}</div>
        </article>
        <SteppedCorner />
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
                    }).replace(/(\d{2})\. (\d{2})\. (\d{2})\. /, '$1-$2-$3 ')}
                  </time>
                  <span>{opinion.author}</span>
                </small>
              </article>
            ))}
          <Button onClick={() => goToDetails()} className='custom-button white'>
            ← 상품 상세 페이지로 이동
          </Button>
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
                  }).replace(/(\d{2})\. (\d{2})\. (\d{2})\. /, '$1-$2-$3 ')}
                </time>
                <span>{opinion.author}</span>
              </small>
              <div className="vote-buttons">
                <Button className='vote upvote'>찬성</Button>
                <Button className='vote downvote'>반대</Button>
                <Button onClick={() => openModal('report')} className='vote report'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.73 3H8.27L3 8.27V15.73L8.27 21H15.73L21 15.73V8.27L15.73 3ZM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5H14.9L19 9.1V14.9Z" fill="#7787A2" />
                    <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" fill="#7787A2" />
                    <path d="M11 7H13V14H11V7Z" fill="#7787A2" />
                  </svg>
                </Button>
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