import React, { Component } from "react";
import Card from "./Card";
import styles from "./Cards.module.css";


import IphoneX from "../images/Apple-iphone-X_05.jpg";
import Iphone11 from "../images/Iphone-11.jpg";
import Iphone12 from "../images/Iphone-12.jpg";
import S21 from "../images/Samsung-Galaxy-S21-Ultra-5G-1.jpg";

class Cards extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Card image={IphoneX} name="Iphone X" cost="550 $"/>
        <Card image={Iphone11} name="Iphone 11" cost="650 $"/>
        <Card image={Iphone12} name="Iphone 12" cost="800 $"/>
        <Card image={S21} name="S21 Ultra" cost="750 $"/>
      </div>
    );
  }
}

export default Cards;
