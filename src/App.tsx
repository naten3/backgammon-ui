import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { AppState } from './reducers/root.reducer';
import { ThunkDispatch } from 'redux-thunk';
import { getToken } from './util/storage.utils';
import { fetchToken } from './actions/user/actions';

export interface OwnProps {
}

interface StateProps {
}
     
interface DispatchProps {
  authenticate: () => void
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
 
const mapDispatchToProps = { authenticate: fetchToken }

export default connect<StateProps, DispatchProps, OwnProps, AppState>(mapStateToProps, mapDispatchToProps)(App)