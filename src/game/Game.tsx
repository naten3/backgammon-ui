import React, { Component } from "react";
import {withRouter} from 'react-router-dom';

class Game extends Component {
  render() {
    return (
      <div>
        <h1>Game component</h1>
      </div>
    );
  }

  componentDidMount() {
  //@ts-ignore
    const { gameId } = this.props.match.params
    console.log(`component did mount ` + gameId);
  }
}

export default Game;
