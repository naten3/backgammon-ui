import React, { useEffect, FC } from "react";
import './sideTray.css'
import { Game } from "../../store/game/types";
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'
import { AppState } from "../../reducers/root.reducer";
import { websocketInitialRoll } from "../../actions/ws/actions";
import Button from '@material-ui/core/Button';
import { Color, getInitialRoll } from "../../model/game.models";

interface OwnProps {
  game: Game
  isPlaying: boolean
  myColor: Color
}

interface StateProps {
  initialRoll: boolean,
  blackInitialRoll: number | null,
  whiteInitialRoll: number | null,
  canRoll: boolean
}

interface DispatchProps {
  makeInitialRoll: () => void
}

type Props = OwnProps & DispatchProps & StateProps;

const PlayerNameBar: FC<OwnProps> = function (props: Props) {
  const initialRollView = () => {
    return <div className="initial-roll">
      <ReactDice
        numDice={1}
      />
      {<Button size="medium" color="primary" onClick={props.makeInitialRoll}>Roll</Button>}
    </div>
  }


  return (
    <div className="side-tray" >
      {props.initialRoll || initialRollView()}

    </div>
  );
}

const mapStateToProps = (state: AppState, ownProps: OwnProps): StateProps => {
  const canRoll = ownProps.isPlaying && (state.game.game.initialRoll && !getInitialRoll(state.game.game, ownProps.myColor))
  //|| state.game.game.currentTurn === 

  return {
    initialRoll: state.game.game.initialRoll,
    blackInitialRoll: state.game.game.blackInitialRoll,
    whiteInitialRoll: state.game.game.whiteInitialRoll,
    canRoll
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  makeInitialRoll: () => dispatch(websocketInitialRoll()),
})

export default PlayerNameBar;