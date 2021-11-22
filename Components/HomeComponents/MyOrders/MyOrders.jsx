import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./MyOrders.module.css";

const MyOrders = ({ isNavOpen }) => {
  const [expandSearch, setExpandSearch] = useState(false);
  return (
    <div
      className={
        isNavOpen ? styles["containerTopChanged"] : styles["container"]
      }
      style={{ marginTop: isNavOpen ? "320px" : "" }}
    >
      <header className={styles.title}>
        <h2 className={expandSearch ? styles["topProducts"] : ""}>
          TOP PRODUCTS
        </h2>
        <div className={styles.searchInputDiv}>
          <FontAwesomeIcon
            icon={expandSearch ? faTimes : faSearch}
            className={
              expandSearch ? styles["searchIconCollapse"] : styles["searchIcon"]
            }
            onClick={() => setExpandSearch((value) => !value)}
          />

          <input
            className={
              expandSearch ? styles["searchInputActive"] : styles["searchInput"]
            }
            type="search"
            placeholder="Search products ..."
          />
        </div>
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

export default MyOrders;
