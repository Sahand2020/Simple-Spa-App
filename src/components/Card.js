import React, { Component } from "react";
import styles from "./Card.module.css";
import down from "../images/down.svg";
import up from "../images/up.svg";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  downHandler = () => {
    if (this.state.counter >= 1) {
      this.setState((prevState) => ({
        counter: prevState.counter - 1,
      }));
    }
  };

  upHandler = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    const { image, name, cost } = this.props;
    const { counter } = this.state;
    return (
      <div className={styles.container}>
        <img src={image} alt="smart phone" />
        <h3>{name}</h3>
        <p>
          {cost}{" "}
          {counter
            ? ` x ${counter} = ${counter * Number(cost.split(" ")[0])} $`
            : ""}
        </p>

        <div className={styles.counter}>
          <img
            src={down}
            alt="arrow"
            // className={counter ? "" : styles.deactivated}
            className={!counter && styles.deactivated}
            onClick={this.downHandler}
          />
          <span>{counter}</span>
          <img src={up} alt="arrow" onClick={this.upHandler} />
        </div>
      </div>
    );
  }
}

export default Card;
