import React, { useState } from "react";
import Header from "../../Components/HomeComponents/Header";
import Head from "next/head";
import withAuth from "../../Authentication/protectedRoutes";
import MyOrders from "../../Components/HomeComponents/MyOrders/MyOrders";

const User_Orders = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleOpenNavbar = (value) => {
    setOpenNav(value);
  };
  return (
    <>
      <Header handleOpenNavbar={handleOpenNavbar} />
      <MyOrders isNavOpen={openNav} />
      <Head>
        <title>My Orders</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          src="https://kit.fontawesome.com/1794b9b2a9.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
    </>
  );
};

export default withAuth(User_Orders);
