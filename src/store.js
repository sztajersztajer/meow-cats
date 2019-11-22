import {combineReducers, compose, createStore} from 'redux';
import reducer from './Cat/reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    combineReducers({
      catReducer: reducer    
    }),
    composeEnhancers(

    )
);