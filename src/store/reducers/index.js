import { combineReducers } from 'redux';
//reducers
import commonUtilsReducers from './commonUtilsReducers';
import systemReducers from './systemReducers';

const allReducers = {
    commonUtilsReducers,
    systemReducers
};

const rootReducers = combineReducers(allReducers);

export default rootReducers