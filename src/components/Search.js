import React, { Component } from "react";
import styles from "./Search.module.css";

class Search extends Component {
  render() {
    return (
      <div className={styles.container}>
        <p>Search What You're looking for</p>
        <div>
          <input placeholder="Search..."></input>
          <button type="button">Search</button>
        </div>
      </div>
    );
  }
}

export default Search;
