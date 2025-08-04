import { combineReducers } from 'redux';
import fadeReducer from './fadeReducer';

export default combineReducers({
  fade: fadeReducer,
});
