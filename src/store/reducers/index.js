import { combineReducers } from 'redux';
//reducers
import commonUtilsReducers from './commonUtilsReducers';

const allReducers = {
    commonUtilsReducers
};

const rootReducers = combineReducers(allReducers);

export default rootReducers