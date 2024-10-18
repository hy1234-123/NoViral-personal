import React from "react";
import "./Sidebar.css";

const Sidebar = ({ thumbnail, onProductSelect, selectedProductId }) => {
  return (
    <div className="sidebar">
      <h2>제품 썸네일</h2>
      <div className="thumbnail-container">
        {thumbnail && thumbnail.length > 0 ? (
          thumbnail.map((item) => (
            <div
              key={item.id}
              className={`thumbnail-item ${
                selectedProductId === item.id ? "selected" : ""
              }`}
              onClick={() => onProductSelect(item.id)}
            >
              <img src={item.thumbnail} alt={`Product ${item.id}`} />
            </div>
          ))
        ) : (
          <p>No thumbnails available</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
