import React, { Component, FC, ReactElement, useEffect } from "react";
import { withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Game } from '../store/game/types';
import Board from './Board';
import { AppState } from "../reducers/root.reducer";
import PlayerNameBar from './playerNameBar/PlayerNameBar';
import SideTray from './sideTray/SideTray';
import { ThunkDispatch } from "redux-thunk";
import { navigatedToGameAction } from "../actions/user/actions";
import { websocketJoinGame } from "../actions/ws/actions";
import './game.css'
import { Color } from "../model/game.models";

export interface OwnProps {
  propFromParent: number;
}

interface StateProps {
  game: Game,
  blackName: string,
  whiteName: string
  isPlaying: boolean
  myColor: Color
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

  const blackPlayerBar = props.game && props.game.black ?
    (<PlayerNameBar displayName={props.blackName}></PlayerNameBar>) : null;

  const whitePlayerBar = props.game && props.game.white ?
    (<PlayerNameBar displayName={props.whiteName}></PlayerNameBar>) : null;

  return (<div>
    <div className="top-bar player-bar">
      {whitePlayerBar}
      <div className="join-button">
        {(!props.game || !props.game.black || !props.game.white) &&
          <Button size="medium" color="primary" onClick={joinGame}>Join Game</Button>
        }
      </div>
    </div>
    <div className="play-area">
      <SideTray game={props.game} isPlaying={props.isPlaying} myColor={props.myColor}></SideTray>
      <Board board={props.game.board} />
    </div>
    <div className="bottom-bar player-bar">
      {blackPlayerBar}
    </div>
  </div>)

}

const mapStateToProps = (state: AppState, ownProps: OwnProps): StateProps => {
  const isPlaying = state.game.game && (state.game.game.black === state.user.userId ||
    state.game.game.white === state.user.userId);
  let myColor: Color;

  if (!isPlaying) {
    myColor = Color.None;
  } else if (state.game.game.black === state.user.userId) {
    myColor = Color.Black;
  } else if (state.game.game.white === state.user.userId) {
    myColor = Color.White;
  } else {
    throw Error("No color matches")
  }

  return {
    game: state.game.game,
    blackName: state.game.blackName,
    whiteName: state.game.whiteName,
    isPlaying: isPlaying,
    myColor: myColor
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  navigateToGameAction: (gameId: string) => dispatch(navigatedToGameAction(gameId)),
  joinGameAction: (gameId: string) => dispatch(websocketJoinGame(gameId))
})


export default connect<StateProps, DispatchProps, OwnProps, AppState>(mapStateToProps, mapDispatchToProps)(GameComponent)
