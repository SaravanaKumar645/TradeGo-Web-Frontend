import React from "react";
import styles from "../styles/LandingPage.module.css";
import { useRouter } from "next/router";
const LandingPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h1>TRADE&ensp; GO</h1>
      <p>Trading made Simple !</p>
      <div className={styles.navigationButtons}>
        <button onClick={() => router.push("/login_user")}>Login</button>
        <button onClick={() => router.push("/register_user")}>Register</button>
      </div>
    </div>
  );
};

export default LandingPage;
