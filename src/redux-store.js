import _ from 'lodash';
import history from './utils/history';

import thunkMiddleware from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {createBrowserHistory} from 'history';
import {connectRouter} from 'connected-react-router';

const composeEnhancers = (_.toLower(process.env.NODE_ENV) === 'development')
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose;

const store = createStore(
    combineReducers({
      initialState: {},
      router: connectRouter(history),
    }),
    composeEnhancers(
      applyMiddleware(thunkMiddleware),
      applyMiddleware(routerMiddleware(createBrowserHistory())),
    ),
  );
  
  window.__store__ = store;
  
  export default store;
