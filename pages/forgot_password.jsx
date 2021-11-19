import React from "react";
import ForgotPassword from "../Components/ForgotPassword";
import isProtected from "../Authentication/routeCheck";
import router from "next/router";
import { useEffect } from "react";
import Notifications from "../Components/Notifications";
import Head from "next/head";
const Forgot_Password_Page = () => {
  useEffect(() => {
    const redirect = isProtected();
    if (redirect) {
      Notifications.notifySuccess("Cached User details. Login success !");
      router.replace("/trade-go/home");
    }
  }, []);
  return (
    <>
      <ForgotPassword />

      <Head>
        <title>Forgot Password</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          src="https://kit.fontawesome.com/1794b9b2a9.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
    </>
  );
};

export default Forgot_Password_Page;
