import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Game } from '../store/game/types';
import Board from './Board';
import { AppState } from "../reducers/root.reducer";
import { ThunkDispatch } from "redux-thunk";
import { navigatedToGameAction } from "../actions/user/actions";
import { websocketJoinGame } from "../actions/ws/actions";

export interface OwnProps {
  propFromParent: number;
}

interface StateProps {
  game: Game
}

interface DispatchProps {
  navigateToGameAction: (string) => void,
  joinGameAction: (string) => void
}

type Props = OwnProps & DispatchProps & StateProps;

class GameComponent extends Component<Props> {

  constructor(props) {
    super(props);
    this.getGameId = this.getGameId.bind(this);
    this.joinGame = this.joinGame.bind(this);
  }

  getGameId() {
    //@ts-ignore
    return this.props.match.params.gameId;
  }

  joinGame() {
    this.props.joinGameAction(this.getGameId())
  }

  render() {
    return (
      <div>
        <button onClick={this.joinGame}>Join Game</button>
        <Board board={this.props.game.board} />
      </div>
    );
  }

  componentDidMount() {
    //@ts-ignore
    const gameId = this.getGameId();
    console.log(`component did mount ` + gameId);
    this.props.navigateToGameAction(gameId);
  }
}

const mapStateToProps = (state: AppState, ownProps: OwnProps): StateProps => {
  return { game: state.game.game }
}

const mapDispatchToProps = (dispatch: any) => ({
  navigateToGameAction: (gameId: string) => dispatch(navigatedToGameAction(gameId)),
  joinGameAction: (gameId: string) => dispatch(websocketJoinGame(gameId))
})


export default connect<StateProps, DispatchProps, OwnProps, AppState>(mapStateToProps, mapDispatchToProps)(GameComponent)
