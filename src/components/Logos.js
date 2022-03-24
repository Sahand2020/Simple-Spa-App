import React from "react";
import styles from "./Logos.module.css";
import Apple from "../images/apple.png";
import Samsung from "../images/samsung.png";
import Asus from "../images/asus.png";

const Logos = () => {
  return (
    <div className={styles.container}>
      <h3>Who Support Us ?</h3>
      <div>
        <img src={Apple} alt="logo" />
        <img src={Samsung} alt="logo" />
        <img src={Asus} alt="logo" />
      </div>
    </div>
  );
};
export default Logos;
