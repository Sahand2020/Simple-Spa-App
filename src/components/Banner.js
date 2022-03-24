import React from "react";
import styles from "./Banner.module.css";
import banner from "../images/tinter.png";

const Banner = () => {
  return (
    <div className={styles.container}>
      <img src={banner} alt="banner" />
      <div className={styles.textContainer}>
        <h1>Landing Page</h1>
        <p>
          We Are Learning{" "}
          <a target="_blank" href="https://reactjs.org" rel="noreferrer">
            React JS
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Banner;
