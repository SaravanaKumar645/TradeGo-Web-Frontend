import React from "react";
import styles from "../../styles/Home.module.css";
const Home = ({ isNavOpen }) => {
  return (
    <div
      style={{ marginTop: isNavOpen ? "350px" : "" }}
      className={
        isNavOpen ? styles["containerTopChanged"] : styles["container"]
      }
    >
      <p>Hello</p>
    </div>
  );
};

export default Home;
