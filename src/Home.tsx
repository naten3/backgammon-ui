import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Home extends Component {
  render() {
    const gameId = this.generateUUID();
    console.info("redirecting to random game " + gameId)
    const redirect = `/game/${gameId}`;
    return (<Redirect to={redirect} />);
  }

  private generateUUID(): string {
      var d = new Date().getTime();
      if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
          d += performance.now(); //use high-precision timer if available
      }
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
  }
}

export default Home;
