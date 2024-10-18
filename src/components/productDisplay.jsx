import React, { useState, useEffect } from "react";
import "../css/ProductDisplay.css";

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

  useEffect(() => {
    const img = new Image();
    img.src = isSelected && selectedProduct ? selectedProduct.thumbnail : thumbnail;
    img.onload = () => setImageLoaded(true);
  }, [thumbnail, isSelected, selectedProduct]);

  const displayedProduct = isSelected && selectedProduct ? selectedProduct : {
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

  return (
    <div className="productDisplay">
      <div className="productImg">
        {imageLoaded ? (
          <img src={displayedProduct.thumbnail} alt={displayedProduct.product_name} />
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
          <p>
            세로 <span>{displayedProduct.depth}</span>
          </p>
          <p>
            가로 <span>{displayedProduct.width}</span>
          </p>
          <p>
            높이 <span>{displayedProduct.height}</span>
          </p>
          <p>
            무게 <span>{displayedProduct.weight}</span>
          </p>
          <p>
            색상 <span>{displayedProduct.color}</span>
          </p>
          <p className="description">{displayedProduct.description}</p>
        </div>
        <p className="price">
          {displayedProduct.price} {displayedProduct.currency}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;