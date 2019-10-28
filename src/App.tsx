import React, { useEffect, Dispatch } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { AppState } from './reducers/root.reducer';
import { authenticateAction, updateLocalNameAction } from './actions/user/actions';
import { UserActionTypes } from './actions/user/types';
import { websocketChangeName } from './actions/ws/actions';
import { TextField } from '@material-ui/core';

export interface OwnProps {
}

interface StateProps {
  displayName: string,
  emptyStringDisplayName: string
}

interface DispatchProps {
  authenticate: () => void
  changeName: (string) => void
  updateLocalName: (string) => void
}

type Props = OwnProps & DispatchProps & StateProps;


const App: React.FC<Props> = (props) => {

  useEffect(() => {
    props.authenticate();
  }, ['']);



  return (
    <div className="app">
      <form noValidate autoComplete="off">
        <TextField
          id="display-name"
          label="Display Name"
          className="display-name"
          value={props.displayName}
          onChange={event => props.updateLocalName(event.target.value)}
          onBlur={event => props.changeName(event.target.value)}
          margin="normal"
          variant="outlined"
        />
      </form>
    </div>
  );
}

const mapStateToProps = (state: AppState, ownProps: OwnProps): StateProps => {
  return {
    displayName: state.user.displayName,
    emptyStringDisplayName: state.user.displayName || ''
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  authenticate: () => dispatch(authenticateAction()),
  changeName: (displayName: string) => dispatch(websocketChangeName(displayName)),
  updateLocalName: (displayName: string) => dispatch(updateLocalNameAction(displayName)),
})

export default connect<StateProps, DispatchProps, OwnProps, AppState>(mapStateToProps, mapDispatchToProps)(App)