import React from "react";
import "../css/CloseButton.css";

function CloseButton({ onClick, style }) {
  return (
    <button className="close-button" onClick={onClick} style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="close-icon"
        fill="currentColor" // SVG 색상을 버튼의 색상으로 설정
      >
        <line
          x1="4"
          y1="4"
          x2="20"
          y2="20"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="20"
          y1="4"
          x2="4"
          y2="20"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
}

export default CloseButton;
