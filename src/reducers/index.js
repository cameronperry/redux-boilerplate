import CountReducer from './Count/CountReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    Count: CountReducer
});