import React, { useEffect, Dispatch } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { AppState } from './reducers/root.reducer';
import { authenticateAction } from './actions/user/actions';
import { UserActionTypes } from './actions/user/types';
import EditableLabel from 'react-inline-editing';
import { websocketChangeName } from './actions/ws/actions';

export interface OwnProps {
}

interface StateProps {
  displayName: string
}

interface DispatchProps {
  authenticate: () => void
  changeName: (string) => void
}

type Props = OwnProps & DispatchProps & StateProps;


const App: React.FC<Props> = (props) => {

  useEffect(() => {
    props.authenticate();
  }, []);

  return (
    <div className="App">
      <EditableLabel text={props.displayName}
        labelClassName='myLabelClass'
        inputClassName='myInputClass'
        inputWidth='200px'
        inputHeight='25px'
        inputMaxLength='50'
        labelFontWeight='bold'
        inputFontWeight='bold'
        onFocusOut={(val) => props.changeName(val.text)}
      />
    </div>
  );
}

const mapStateToProps = (state: AppState, ownProps: OwnProps): StateProps => {
  return {
    displayName: state.user.displayName
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  authenticate: () => dispatch(authenticateAction()),
  changeName: (displayName: string) => dispatch(websocketChangeName(displayName))
})

export default connect<StateProps, DispatchProps, OwnProps, AppState>(mapStateToProps, mapDispatchToProps)(App)