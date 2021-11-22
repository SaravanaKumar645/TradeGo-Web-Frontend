import React, { useState } from "react";
import Header from "../../Components/HomeComponents/Header";
import Head from "next/head";
import withAuth from "../../Authentication/protectedRoutes";
import MyCart from "../../Components/HomeComponents/MyCart/MyCart";

const User_Cart = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleOpenNavbar = (value) => {
    setOpenNav(value);
  };
  return (
    <>
      <Header handleOpenNavbar={handleOpenNavbar} />
      <MyCart isNavOpen={openNav} />
      <Head>
        <title>My Cart</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          src="https://kit.fontawesome.com/1794b9b2a9.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
    </>
  );
};

export default withAuth(User_Cart);
