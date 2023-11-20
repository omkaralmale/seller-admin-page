/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";

function App() {
  const [products, setProducts] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products"));
    if (storedProducts) {
      setProducts(storedProducts);
      calculateTotalSum(storedProducts);
    }
  }, []);

  const calculateTotalSum = (productList) => {
    const sum = productList.reduce(
      (total, product) => total + parseFloat(product.sellingPrice),
      0
    );
    setTotalSum(sum);
  };

  const addProduct = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    calculateTotalSum(updatedProducts);
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.productId !== productId
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    calculateTotalSum(updatedProducts);
  };

  return (
    <div className="App">
      <h1>Product Management</h1>
      <AddProductForm onAddProduct={addProduct} />
      <div className="total">Total Sum: $ {totalSum.toFixed(2)}</div>
      <ProductList productList={products} onDeleteProduct={deleteProduct} />
    </div>
  );
}

export default App;
