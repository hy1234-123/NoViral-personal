import React, { useState } from "react";
import CloseButton from "../components/CloseButton";
import InputField from "../components/InputField";
import "../css/SubNavBar.css";

const SubNavBar = () => {
  const [activeTab, setActiveTab] = useState("입문용");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [inputValues, setInputValues] = useState({
    width: "",
    height: "",
    depth: "",
    weight: "",
  });
  const [isButtonActive, setIsButtonActive] = useState(false); // 버튼 활성화 여부

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleInputChange = (field, value) => {
    // 소수점 뒤 2자리까지만 허용하며, 최대 입력값을 99999로 제한
    const regex = /^\d*\.?\d{0,2}$/; // 소수점 뒤 2자리까지 허용하는 정규식

    if (value === "" || (regex.test(value) && Number(value) <= 99999)) {
      const updatedValues = {
        ...inputValues,
        [field]: value,
      };
      setInputValues(updatedValues);

      // 하나라도 입력된 값이 있으면 버튼 활성화
      const isAnyFieldFilled = Object.values(updatedValues).some(
        (val) => val.trim() !== ""
      );
      setIsButtonActive(isAnyFieldFilled);
    }
  };

  return (
    <div className="subnav-fixed">
      <div className={`subnav-container ${isFilterOpen ? "expanded" : ""}`}>
        <div className="tabs">
          <span
            className={`tab ${activeTab === "입문용" ? "active" : ""}`}
            onClick={() => handleTabClick("입문용")}
          >
            입문용
          </span>

          {/* 탭 사이에 SVG 추가 */}
          <svg
            width="1"
            height="12"
            viewBox="0 0 1 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="0.5" y1="0" x2="0.5" y2="12" stroke="#EBEDF1" />
          </svg>

          <span
            className={`tab ${activeTab === "중상급" ? "active" : ""}`}
            onClick={() => handleTabClick("중상급")}
          >
            중상급
          </span>

          <svg
            width="1"
            height="12"
            viewBox="0 0 1 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="0.5" y1="0" x2="0.5" y2="12" stroke="#EBEDF1" />
          </svg>

          <span
            className={`tab ${activeTab === "하이엔드" ? "active" : ""}`}
            onClick={() => handleTabClick("하이엔드")}
          >
            하이엔드
          </span>
        </div>
        <div className={`actions ${isFilterOpen ? "filter-open" : ""}`}>
          <span
            className="new-product"
            onClick={() => (window.location.href = "/new-product")}
          >
            새 상품 등록
          </span>
          <span className="filter" onClick={handleFilterClick}>
            {isFilterOpen ? <CloseButton /> : "Filter"}
          </span>
        </div>
      </div>
      {isFilterOpen && (
        <div className="filter-dropdown">
          <div className="input-wrapper">
            <InputField
              className="subnav-input"
              label="가로"
              label2="mm"
              placeholder=""
              value={inputValues.width}
              maxLength={5}
              onChange={(e) => handleInputChange("width", e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <InputField
              className="subnav-input"
              label="세로"
              label2="mm"
              placeholder=""
              value={inputValues.height}
              maxLength={5}
              onChange={(e) => handleInputChange("height", e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <InputField
              className="subnav-input"
              label="높이"
              label2="mm"
              placeholder=""
              value={inputValues.depth}
              maxLength={5}
              onChange={(e) => handleInputChange("depth", e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <InputField
              className="subnav-input"
              label="무게"
              label2="g"
              placeholder=""
              value={inputValues.weight}
              maxLength={5}
              onChange={(e) => handleInputChange("weight", e.target.value)}
            />
          </div>
          <button
            className="search-btn"
            disabled={!isButtonActive} // 버튼 활성화 여부 제어
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.146 12.3707 1.888 11.112C0.63 9.85333 0.000667196 8.316 5.29101e-07 6.5C-0.000666138 4.684 0.628667 3.14667 1.888 1.888C3.14733 0.629333 4.68467 0 6.5 0C8.31533 0 9.853 0.629333 11.113 1.888C12.373 3.14667 13.002 4.684 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.81267 10.5627 9.688 9.688C10.5633 8.81333 11.0007 7.75067 11 6.5C10.9993 5.24933 10.562 4.187 9.688 3.313C8.814 2.439 7.75133 2.00133 6.5 2C5.24867 1.99867 4.18633 2.43633 3.313 3.313C2.43967 4.18967 2.002 5.252 2 6.5C1.998 7.748 2.43567 8.81067 3.313 9.688C4.19033 10.5653 5.25267 11.0027 6.5 11Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default SubNavBar;
