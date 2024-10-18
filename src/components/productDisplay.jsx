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
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = thumbnail;
    img.onload = () => setImageLoaded(true);
  }, [thumbnail]);

  return (
    <div className="productDisplay">
      <div className="productImg">
        {imageLoaded ? (
          <img src={thumbnail} alt={product_name} />
        ) : (
          <div className="image-placeholder">Loading...</div>
        )}
      </div>
      <div className="productInfo">
        <h2 className="name">
          <span className="rank">#{id}</span>
          {product_name}
        </h2>
        <div className="specs">
          <p>
            세로 <span>{depth}</span>
          </p>
          <p>
            가로 <span>{width}</span>
          </p>
          <p>
            높이 <span>{height}</span>
          </p>
          <p>
            무게 <span>{weight}</span>
          </p>
          <p>
            색상 <span>{color}</span>
          </p>
          <p className="description">{description}</p>
        </div>
        <p className="price">
          {price} {currency}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;