import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route} from 'react-router';
import {Provider} from 'react-redux';
import {Switch, BrowserRouter} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import MainScreen from './main-screen';
import store from './redux-store';
import history from './utils/history';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={MainScreen}/>
        </Switch>
      </ConnectedRouter>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
