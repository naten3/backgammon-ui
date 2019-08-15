import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Game from './game/Game';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './store/store';

ReactDOM.render(
    <Provider store={configureStore()}>
    <Router>
        <App />
        <Route exact path="/" component={Home} />
        <Route path="/game/:gameId" component={Game} />
    </Router>
   </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
