import React, { useState } from "react";
import "../css/InputField.css";

const InputField = ({
  label = "라벨",
  type = "text",
  placeholder = "Enter your email",
  value,
  onChange,
  status = "default", // 상태를 지정할 수 있도록 기본값 설정
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => {
    if (e.target.value === "") {
      setIsFocused(false);
    }
  };

  return (
    <div className={`input-container ${status}`}>
      <label className="input-label">{label}</label>
      <input
        type={type}
        className="input-field"
        placeholder={isFocused ? "" : placeholder} // 포커스 시 placeholder 제거
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default InputField;
