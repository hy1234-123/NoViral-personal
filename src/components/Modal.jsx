import React from 'react';

function Modal({ isOpen, onClose, type }) {
  if (!isOpen) return null; // 모달이 열리지 않았을 경우 렌더링하지 않음

  const renderContent = () => {
    if (type === 'newOpinion') {
      return (
        <form method="dialog">
          <span>새 의견 등록</span>
          <button type="button" onClick={onClose}>X</button>
          <textarea placeholder="의견을 작성하세요..."></textarea>
          <button type="submit">의견 등록</button>
        </form>
      );
    } if (type === 'report') {
      return (
        <form method="dialog">
          <span>의견 제시자 신고</span>
          <button type="button" onClick={onClose}>X</button>
          <label htmlFor="reportReason">신고사유</label>
          <input list="reasonList" id="reportReason" name="reportReason" />
          <datalist id="reasonList">
            <option value="옵션 1" />
            <option value="옵션 2" />
          </datalist>
          <label htmlFor="reportDetails">신고내용</label>
          <textarea name="reportDetails" id="reportDetails"></textarea>
          <button type="submit">신고 접수</button>
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