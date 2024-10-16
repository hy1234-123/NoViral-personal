import React, { useState } from 'react';
import { Button, CloseButton } from './';

function Modal({ isOpen, onClose, type, addOpinion }) {
  const [content, setContent] = useState('');

  if (!isOpen) return null; // 모달이 열리지 않았을 경우 렌더링하지 않음

  const handleNewOpinionSubmit = async (e) => {
    e.preventDefault();

    if (content.trim() === '') {
      return; // 빈 내용이 있으면 제출하지 않음
    }

    const newOpinion = {
      content,
      author: '사용자',
      date: new Date().toISOString(),
      upvotes: 0,
      downvotes: 0,
    };

    try {
      // 서버에 POST 요청 보내기 (localhost:5173으로 요청)
      const response = await fetch(`http://localhost:5173/api/products/${productId}/opinions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOpinion),
      });

      if (response.ok) {
        // API 요청 성공 시, 로컬 상태 업데이트
        addOpinion(newOpinion); // 클라이언트에서 상태 관리
        onClose(); // 모달 닫기
      } else {
        console.error('Failed to add opinion');
      }
    } catch (error) {
      console.error('Error submitting opinion:', error);
    }
  };

  const renderContent = () => {
    if (type === 'newOpinion') {
      return (
        <form method="dialog" onSubmit={handleNewOpinionSubmit}>
          <div className="dialog-header">
            <h2>새 의견 등록</h2>
            <CloseButton onClick={onClose} />
          </div>
          <textarea className='newOpinion'
            placeholder="의견 등록 시 주의 사항
-
-
-"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <small>0/1000</small>
          <Button text="의견 등록" type="submit" />
        </form>
      );
    } else if (type === 'report') {
      return (
        <form method="dialog">
          <div className="dialog-header">
            <h2>의견 제시자 신고</h2>
            <CloseButton onClick={onClose} />
          </div>
          <label htmlFor="reportReason"></label>
          <input list="reasonList" id="reportReason" name="reportReason" placeholder='신고사유 선택' />
          <datalist id="reasonList">
            <option value="옵션 1" />
            <option value="옵션 2" />
          </datalist>
          <label htmlFor="reportDetails"></label>
          <textarea className='report' name="reportDetails" id="reportDetails" placeholder='신고시 주의 사항
-
-
-'></textarea>
          <small>0/500</small>
          <Button text="신고 접수" type="submit" />
        </form>
      );
    }
    return null;
  };

  return (
    <dialog open>
      {renderContent()}
    </dialog>
  );
}

export default Modal;