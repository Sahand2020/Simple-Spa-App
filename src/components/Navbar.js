import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../images/demo icon picture.png";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li>Home</li>
          <li>Products</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className={styles.logo}>
        <img src={Logo} className={styles.logo} alt="logo" />
      </div>
    </header>
  );
};

export default Navbar;
