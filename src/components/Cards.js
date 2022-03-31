import React, { Component } from "react";
import Card from "./Card";
import styles from "./Cards.module.css";

import IphoneX from "../images/Apple-iphone-X_05.jpg";
import Iphone11 from "../images/Iphone-11.jpg";
import Iphone12 from "../images/Iphone-12.jpg";
import S21 from "../images/Samsung-Galaxy-S21-Ultra-5G-1.jpg";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      phoneData: [
        { id: 1, image: IphoneX, name: "Iphone X", cost: "550 $" },
        { id: 2, image: Iphone11, name: "Iphone 11", cost: "650 $" },
        { id: 3, image: Iphone12, name: "Iphone 12", cost: "800 $" },
        { id: 4, image: S21, name: "S21 Ultra", cost: "750 $" },
      ],
    };
  }

  render() {
    return (
      <div className={styles.container}>
        {this.state.phoneData.map((phone) => (
          <Card
            key={phone.id}
            image={phone.image}
            name={phone.name}
            cost={phone.cost}
          />
        ))}
      </div>
    );
  }
}

export default Cards;
