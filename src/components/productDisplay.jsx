import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/productDisplay.css";

const ProductDisplay = ({
  id,
  product_name,
  description,
  price,
  currency,
  thumbnail,
  width,
  depth,
  height,
  weight,
  color,
  isSelected,
  selectedProduct,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const img = new Image();
    img.src = thumbnail;
    img.onload = () => setImageLoaded(true);
  }, [thumbnail]);

  const displayedProduct = {
    id,
    product_name,
    description,
    price,
    currency,
    thumbnail,
    width,
    depth,
    height,
    weight,
    color,
  };

  const handleProductClick = () => {
    navigate(`/details/${displayedProduct.id}`);
  };

  return (
    <div className="productDisplay" onClick={handleProductClick}>
      <div className="productImg">
        {imageLoaded ? (
          <img
            src={displayedProduct.thumbnail}
            alt={displayedProduct.product_name}
          />
        ) : (
          <div className="image-placeholder">Loading...</div>
        )}
      </div>
      <div className="productInfo">
        <h2 className="name">
          <span className="rank">#{displayedProduct.id}</span>
          {displayedProduct.product_name}
        </h2>
        <div className="specs">
          <p className="details">
            세로 <span>{displayedProduct.depth}</span>
          </p>
          <p className="details">
            가로 <span>{displayedProduct.width}</span>
          </p>
          <p className="details">
            높이 <span>{displayedProduct.height}</span>
          </p>
          <p className="details">
            무게 <span>{displayedProduct.weight}</span>
          </p>
          <p className="details">
            색상 <span>{displayedProduct.color}</span>
          </p>
          <p className="description details">
            <span>{displayedProduct.description}</span>
          </p>
        </div>
        <p className="price details">
          {displayedProduct.price} {displayedProduct.currency}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
