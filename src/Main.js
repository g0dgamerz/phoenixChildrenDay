import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Rule from "./Rule";
import Thank from "./Thank";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <center>
            <h1>Phoenix School</h1>
            <h1>Happy Children's Day 2077</h1>
          </center>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                WelCome
              </NavLink>
            </li>
            <li>
              <NavLink to="/rule">Rules for Quiz</NavLink>
            </li>
            <li>
              <NavLink to="/thanks">Thanks</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/rule" component={Rule} />
            <Route path="/thanks" component={Thank} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
