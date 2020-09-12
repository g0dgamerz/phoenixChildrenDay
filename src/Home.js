import React, { Component } from "react";
import cd from "./cd.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome Children</h1>
        <img src={cd} height="300" width="1200" />
      </div>
    );
  }
}

export default Home;
