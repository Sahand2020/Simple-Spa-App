import React, { Component } from "react";

class UserC extends Component {
  constructor() {
    super();
    this.state = {
      name: "sahand",
      age: "21",
    };
  }
  render() {
    const { name, age } = this.state;
    const { myName, job } = this.props;
    return (
      <div>
        <p>
          Hi I am {name} and I am {age} years old.
        </p>        
        <p>
          Hi I am {myName} and I am a {job}.
        </p>
      </div>
    );
  }
}

export default UserC;
