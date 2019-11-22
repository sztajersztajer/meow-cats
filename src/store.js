import {combineReducers, createStore} from 'redux';
import reducer from './Cat/reducer';

export default createStore(
  combineReducers({
    catReducer: reducer    
  })
);