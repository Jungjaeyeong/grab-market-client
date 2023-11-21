import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  return (
    <>
      <div>ProductPage {id} 상품</div>
    </>
  );
};

export default ProductPage;
