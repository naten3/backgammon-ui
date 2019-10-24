import React, { useEffect, Dispatch } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { AppState } from './reducers/root.reducer';
import { authenticateAction } from './actions/user/actions';
import { UserActionTypes } from './actions/user/types';

export interface OwnProps {
}

interface StateProps {
}

interface DispatchProps {
  authenticate: () => UserActionTypes
}

type Props = OwnProps & DispatchProps & StateProps;


const App: React.FC<Props> = (props) => {

  useEffect(() => {
    props.authenticate();
  }, []);

  return (
    <div className="App">
      This is the app
    </div>
  );
}

const mapStateToProps = (state: AppState, ownProps: OwnProps): StateProps => {
  return {}
}

const mapDispatchToProps = (dispatch: any) => ({ authenticate: () => dispatch(authenticateAction()) })

export default connect<StateProps, DispatchProps, OwnProps, AppState>(mapStateToProps, mapDispatchToProps)(App)