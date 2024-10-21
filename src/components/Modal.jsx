import React, { useEffect, useRef, useState } from "react";
import { Button, CloseButton } from "./";
import useAlert from "../hooks/UseAlert";

function Modal({ isOpen, onClose, type }) {
  const dialogRef = useRef(null);
  const [opinionText, setOpinionText] = useState(""); // 의견 텍스트 상태
  const [reportText, setReportText] = useState(""); // 신고 텍스트 상태
  const showAlert = useAlert();

  useEffect(() => {
    const dialog = dialogRef.current;

    if (isOpen) {
      dialog.showModal(); // 모달을 열 때 showModal() 사용
    } else {
      if (dialog.open) dialog.close(); // 모달이 열려 있으면 close()로 닫음
    }
  }, [isOpen]);

  const handleClose = () => {
    dialogRef.current.close(); // 명시적으로 모달을 닫음
    onClose(); // 부모로부터 전달받은 onClose 실행
  };

  // 모달의 헤더 부분을 공통 함수로 분리
  const renderHeader = (title) => (
    <div className="dialog-header">
      <h2>{title}</h2>
      <CloseButton onClick={handleClose} />
    </div>
  );

  // 의견 텍스트 상태 업데이트
  const handleOpinionChange = (e) => {
    setOpinionText(e.target.value);
  };

  // 신고 텍스트 상태 업데이트
  const handleReportChange = (e) => {
    setReportText(e.target.value);
  };

  const renderContent = () => {
    if (type === "newOpinion") {
      return (
        <form method="dialog">
          {renderHeader("새 의견 등록")}
          <textarea
            className="newOpinion"
            placeholder="의견 등록 시 주의 사항
-
-
-"
            value={opinionText}
            onChange={handleOpinionChange}
            maxLength="1000" // 글자 수 제한 설정
          />
          <small>{opinionText.length}/1000</small> {/* 글자 수 표시 */}
          <Button type="submit" onClick={showAlert}>
            의견 등록
          </Button>
        </form>
      );
    }
    if (type === "report") {
      return (
        <form method="dialog">
          {renderHeader("의견 제시자 신고")}
          <label htmlFor="reportReason"></label>
          <input
            list="reasonList"
            id="reportReason"
            name="reportReason"
            placeholder="신고사유 선택"
          />
          <datalist id="reasonList">
            <option value="옵션 1" />
            <option value="옵션 2" />
          </datalist>
          <label htmlFor="reportDetails"></label>
          <textarea
            className="report"
            name="reportDetails"
            id="reportDetails"
            placeholder="신고시 주의 사항
-
-
-"
            value={reportText}
            onChange={handleReportChange}
            maxLength="500" // 글자 수 제한 설정
          />
          <small>{reportText.length}/500</small> {/* 글자 수 표시 */}
          <Button type="submit" onClick={showAlert}>
            신고 접수
          </Button>
        </form>
      );
    }
    return null;
  };

  return (
    <dialog ref={dialogRef} onClose={handleClose}>
      {renderContent()}
    </dialog>
  );
}

export default Modal;
