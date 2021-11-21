import React, { useState } from "react";
import MyProducts from "../../Components/HomeComponents/MyProducts/MyProducts";
import Header from "../../Components/HomeComponents/Header";
import Head from "next/head";
import withAuth from "../../Authentication/protectedRoutes";

const User_Products = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleOpenNavbar = (value) => {
    setOpenNav(value);
  };
  return (
    <>
      <Header handleOpenNavbar={handleOpenNavbar} />
      <MyProducts isNavOpen={openNav} />
      <Head>
        <title>My Products</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          src="https://kit.fontawesome.com/1794b9b2a9.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
    </>
  );
};

export default withAuth(User_Products);
