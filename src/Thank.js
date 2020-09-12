import React, { Component } from "react";
import th from "./th.jpg";
class Thank extends Component {
  render() {
    return (
      <div>
        <center>
                  <h2>Thank you for you active participation</h2>
                  
          <p>Hope you enjoy quiz :)  </p>
            
          <img src={th} height="300" width="600" />   
        </center>
          
      </div>
    );
  }
}
export default Thank;
