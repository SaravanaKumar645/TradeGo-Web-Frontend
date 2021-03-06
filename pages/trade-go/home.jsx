import React, { useState } from "react";
import Home from "../../Components/HomeComponents/Home";
import Head from "next/head";
import withAuth from "../../Authentication/protectedRoutes";
import Header from "../../Components/HomeComponents/Header";
const HomePage = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleOpenNavbar = (value) => {
    setOpenNav(value);
  };
  return (
    <div>
      <Header handleOpenNavbar={handleOpenNavbar} />
      <Home isNavOpen={openNav} />
      <Head>
        <title>Home Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          src="https://kit.fontawesome.com/1794b9b2a9.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
    </div>
  );
};

export default withAuth(HomePage);
