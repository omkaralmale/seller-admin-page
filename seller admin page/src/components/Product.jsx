/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Product = ({ product, onDelete }) => {
  const handleDelete = () => {
    onDelete(product.productId);
  };

  return (
    <div className="Product">
      <span>
        Product ID: {product.productId}
        <br />
        {product.productName} _ Selling Price: {product.sellingPrice}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Product;
