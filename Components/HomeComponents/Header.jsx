import React, { useEffect, useState } from "react";
import styles from "../../styles/Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import isAuthenticated from "../../Authentication/authCheck";
import { Tooltip, tooltipClasses } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faBars,
  faTimes,
  faHome,
  faArchive,
  faSignOutAlt,
  faShoppingCart,
  faUserAstronaut,
  faShoppingBasket,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

const Header = ({ handleOpenNavbar }) => {
  const [currentUser, setCurrentUser] = useState([]);
  const router = useRouter();
  const { asPath } = useRouter();
  const tabPath = asPath;
  const [openNav, setOpenNav] = useState(false);
  const profilePicStyle = {
    backgroundColor: "#ffff",
    borderRadius: "50%",
    height: "40px",
    width: "40px",
  };

  useEffect(async () => {
    const user = await isAuthenticated();
    setCurrentUser(user);
  }, []);
  // *For Tooltip
  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
      fontSize: "10pt",
      padding: "10px 15px 10px 15px",
      textAlign: "center",
    },
  }));

  const handleLogout = () => {
    localStorage.removeItem("token");
    return router.replace("/login_user");
  };
  return (
    <div className={styles.navContainer}>
      <h2>
        <strong>{String(currentUser["name"]).charAt(0)}</strong>
        Welcome
        <BootstrapTooltip title={currentUser.email || "Null"}>
          <span style={{ cursor: "pointer" }}>{currentUser.name} !</span>
        </BootstrapTooltip>
      </h2>
      {/* <FontAwesomeIcon
        onClick={() => {
          handleOpenNavbar(!openNav);
          setOpenNav((value) => !value);
        }}
        icon={openNav ? faTimes : faBars}
        className={styles.navIcon}
      /> */}
      <div
        className={openNav ? styles["navIconActive"] : styles["navIcon"]}
        onClick={() => {
          handleOpenNavbar(!openNav);
          setOpenNav((value) => !value);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul
        id={styles.ul}
        className={openNav ? styles["navUlActive"] : styles["navUl"]}
      >
        <Link href="/trade-go/home">
          <li
            className={
              tabPath === "/trade-go/home"
                ? styles["liTabActive"]
                : styles["liTab"]
            }
          >
            <a>{openNav && <FontAwesomeIcon icon={faHome} />}Home</a>
          </li>
        </Link>
        <Link href="/trade-go/myProducts">
          <li
            className={
              tabPath === "/trade-go/myProducts"
                ? styles["liTabActive"]
                : styles["liTab"]
            }
          >
            <a>{openNav && <FontAwesomeIcon icon={faArchive} />}My Products</a>
          </li>
        </Link>
        <Link href="/trade-go/myCart">
          <li
            className={
              tabPath === "/trade-go/myCart"
                ? styles["liTabActive"]
                : styles["liTab"]
            }
          >
            <a>{openNav && <FontAwesomeIcon icon={faShoppingCart} />}Cart</a>
          </li>
        </Link>
        <Link href="/trade-go/myOrders">
          <li
            className={
              tabPath === "/trade-go/myOrders"
                ? styles["liTabActive"]
                : styles["liTab"]
            }
          >
            <a>{openNav && <FontAwesomeIcon icon={faShoppingBag} />}Orders</a>
          </li>
        </Link>
        <Link href="/trade-go/myProfile">
          <li
            className={
              tabPath === "/trade-go/myProfile"
                ? styles["liTabActive"]
                : styles["liTab"]
            }
          >
            <a>
              {openNav && <FontAwesomeIcon icon={faUserAstronaut} />}Profile
            </a>
          </li>
        </Link>
        <li className={styles.liTab}>
          <a className={styles.navTab} onClick={handleLogout}>
            {openNav && <FontAwesomeIcon icon={faSignOutAlt} />}
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
