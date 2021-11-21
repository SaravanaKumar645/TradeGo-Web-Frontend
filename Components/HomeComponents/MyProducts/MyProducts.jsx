import React from "react";
import styles from "./MyProducts.module.css";

const MyProducts = ({ isNavOpen }) => {
  return (
    <div
      className={
        isNavOpen ? styles["containerTopChanged"] : styles["container"]
      }
      style={{ marginTop: isNavOpen ? "350px" : "" }}
    >
      <p>My product</p>
    </div>
  );
};

export default MyProducts;
