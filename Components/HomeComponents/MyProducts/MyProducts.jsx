import React from "react";
import styles from "./MyProducts.module.css";
import ProdcutAddForm from "./ProdcutAddForm";

const MyProducts = ({ isNavOpen }) => {
  return (
    <div
      className={
        isNavOpen ? styles["containerTopChanged"] : styles["container"]
      }
      style={{ marginTop: isNavOpen ? "320px" : "" }}
    >
      <header className={styles.title}>
        <h2>MY PRODUCTS</h2>
        <button>Add Your Products</button>
      </header>
      <ul className={styles.productList}>
        <li>Product 1</li>
        <li>Product 1</li>
        <li>Product 1</li>
        <li>Product 1</li>
        <li>Product 1</li>
        <li>Product 1</li>
        <li>Product 1</li>
        <li>Product 1</li>
        <li>Product 1</li>
        <li>Product 1</li>
        <li>Product 1</li>
        <li>Product 1</li>
      </ul>
    </div>
  );
};

export default MyProducts;
