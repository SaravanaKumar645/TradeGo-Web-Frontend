import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faSyncAlt,
  faCartArrowDown,
  faSearch,
  faTimes,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Home = ({ isNavOpen }) => {
  const [expandSearch, setExpandSearch] = useState(false);
  const [showBtnLoader, setShowBtnLoader] = useState(false);
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
        <li>
          <img
            className={styles.liImg}
            src="/cart-empty.jpeg"
            alt="No img found"
          ></img>

          <div className={styles.detailsAndButtonWrapper}>
            <div className={styles.prodDetails}>
              <h3>Product Name</h3>
              <section>
                <p>Rs.20000</p>
                <strong>Category</strong>
              </section>
              <span>
                View more details{" "}
                <FontAwesomeIcon
                  className={styles.svg}
                  icon={faArrowAltCircleRight}
                />
              </span>
            </div>
            <div className={styles.prodButtons}>
              <button
                className={styles.addToCartBtn}
                onClick={() => setShowBtnLoader((value) => !value)}
              >
                {!showBtnLoader && (
                  <>
                    <a>Add To Cart</a>
                    <FontAwesomeIcon
                      className={styles.btnCartAnimate}
                      icon={faCartPlus}
                    />
                  </>
                )}
                {showBtnLoader && (
                  <FontAwesomeIcon
                    className={styles.btnLoader}
                    icon={faSyncAlt}
                  />
                )}
              </button>
              <button className={styles.buyNowBtn}>
                <a>Buy Now</a>
                <FontAwesomeIcon
                  className={styles.btnCartAnimate}
                  icon={faCartArrowDown}
                />
              </button>
            </div>
          </div>
        </li>
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

export default Home;
