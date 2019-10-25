import React, { Component, FC, ReactElement, useEffect } from "react";
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

const GameComponent: FC<Props> = function (props: Props): ReactElement<Props> {

  const getGameId = () => {
    //@ts-ignore
    return props.match.params.gameId;
  }

  const joinGame = () => {
    props.joinGameAction(getGameId())
  }

  useEffect(() => {
    const gameId = getGameId();
    console.log(`component did mount ` + gameId);
    props.navigateToGameAction(gameId);
  }, []);

  return (<div>
    <button onClick={joinGame}>Join Game</button>
    <Board board={props.game.board} />
  </div>)

}

const mapStateToProps = (state: AppState, ownProps: OwnProps): StateProps => {
  return { game: state.game.game }
}

const mapDispatchToProps = (dispatch: any) => ({
  navigateToGameAction: (gameId: string) => dispatch(navigatedToGameAction(gameId)),
  joinGameAction: (gameId: string) => dispatch(websocketJoinGame(gameId))
})


export default connect<StateProps, DispatchProps, OwnProps, AppState>(mapStateToProps, mapDispatchToProps)(GameComponent)
