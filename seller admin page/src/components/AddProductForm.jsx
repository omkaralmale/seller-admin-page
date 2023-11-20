/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import "./AddProductForm.css";

const AddProductForm = ({ onAddProduct }) => {
  const [error, setError] = useState("");
  const productIdRef = useRef();
  const productNameRef = useRef();
  const sellingPriceRef = useRef();

  const handleSubmission = (event) => {
    event.preventDefault();

    const productId = productIdRef.current.value.trim();
    const productName = productNameRef.current.value.trim();
    const sellingPrice = sellingPriceRef.current.value.trim();

    if (!productId || !productName || !sellingPrice) {
      setError("Please fill in all fields.");
      return;
    }

    const newProduct = {
      productId,
      productName,
      sellingPrice,
    };

    onAddProduct(newProduct);

    productIdRef.current.value = "";
    productNameRef.current.value = "";
    sellingPriceRef.current.value = "";
    setError("");
  };

  return (
    <div className="AddProductForm">
      <h2>Add a Product</h2>
      <form onSubmit={handleSubmission}>
        <div>
          <input type="number" placeholder="Product Id" ref={productIdRef} />
        </div>
        <div>
          <input type="text" placeholder="Product Name" ref={productNameRef} />
        </div>
        <div>
          <input
            type="number"
            placeholder="Selling Price"
            ref={sellingPriceRef}
          />
        </div>
        <button>Add to List</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default AddProductForm;
