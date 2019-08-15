import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Game } from '../store/game/types';
import Board from './Board';
import { AppState } from "../reducers/root.reducer";
import { ThunkDispatch } from "redux-thunk";

export interface OwnProps {
  propFromParent: number
}

interface StateProps {
  game: Game
}
     
interface DispatchProps {
  onSomeEvent: () => void
}

type Props = OwnProps & DispatchProps & StateProps;

class GameComponent extends Component<Props> {

  
  render() {
    return (
      <div>
        <h1>Game component</h1>
        <Board board={this.props.game.board}/>
      </div>
    );
  }

  componentDidMount() {
  //@ts-ignore
    const { gameId } = this.props.match.params
    console.log(`component did mount ` + gameId);
  }
}

const mapStateToProps = (state: AppState, ownProps: OwnProps): StateProps => {
  return {game: state.game.game}
}
 
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>, ownProps: OwnProps): DispatchProps => {
  return { onSomeEvent: () => {} }
}

export default connect<StateProps, DispatchProps, OwnProps, AppState>(mapStateToProps, mapDispatchToProps)(GameComponent)
