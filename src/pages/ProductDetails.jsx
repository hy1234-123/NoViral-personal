import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import UseProductData from "../hooks/UseProductData";
import ProductOverview from "../components/ProductOverview";

function ProductDetails() {
  const { id } = useParams();
  const product = UseProductData(id);
  console.log(product, "?");
  const navigate = useNavigate();

  const goToDiscussion = () => {
    navigate(`/discussion/${id}`);
  };

  return (
    <main className="Details-n-Discussion details">
      <ProductOverview
        product={product}
        id={id}
        buttonText="상품 의견 제시"
        buttonAction={goToDiscussion}
      />
      <section className="discussion-section">
        <img src={product?.thumbnail} alt="" />
      </section>
    </main>
  );
}

export default ProductDetails;
