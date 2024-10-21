/** Button.jsx
 * 추가: 매개변수 className
 * 요청 사항: 내용을 text만이 아닌 icon도
 * 넣을 수 있도록 확인 후 조치 바람.
 * 변경: css 참조 경로
 * 디렉토리 체계에 따라 css를 본 폴더에서
 * css 폴더로 옮김. 다른 공통 컴포넌트의
 * css 파일에도 일괄 적용.
 */
import React from "react";
import "../css/Button.css";

function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "custom-button",
  style,
}) {
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
}

export default Button;
