import React, { useState } from "react";
import "../css/InputField.css";

const InputField = ({
  label = "라벨",
  label2 = "", // 두 번째 라벨 (단위 표시용)
  type = "text",
  placeholder = "Enter your value",
  value,
  onChange,
  status = "default", // 상태 지정
  className = "", // 기본 className 설정
  style,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => {
    if (e.target.value === "") {
      setIsFocused(false);
    }
  };

  return (
    <div className={`input-container ${status} ${className}`} style={style}>
      {/* 첫 번째 라벨 */}
      <label className="input-label">{label}</label>
      <input
        type={type}
        className="input-field"
        placeholder={isFocused ? "" : placeholder}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {/* 두 번째 라벨: 단위 표시용 */}
      {label2 && <label className="input-label2">{label2}</label>}
    </div>
  );
};

export default InputField;
