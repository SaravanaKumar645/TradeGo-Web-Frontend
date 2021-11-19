import React from "react";
import Home from "../../Components/HomeComponents/Home";
import Head from "next/head";
import withAuth from "../../Authentication/protectedRoutes";
const HomePage = () => {
  return (
    <>
      <Home />
      <Head>
        <title>HomePage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          src="https://kit.fontawesome.com/1794b9b2a9.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
    </>
  );
};

export default withAuth(HomePage);
