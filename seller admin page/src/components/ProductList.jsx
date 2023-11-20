/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// ProductList.js
import React from "react";
import Product from "./Product";
import "./productList.css";

const ProductList = ({ productList, onDeleteProduct }) => {
  const handleDelete = (productId) => {
    onDeleteProduct(productId);
  };

  return (
    <div className="ProductList">
      {productList.map((product) => (
        <Product
          key={product.productId}
          product={product}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ProductList;
