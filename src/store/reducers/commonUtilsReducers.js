import commonUtilsState from './../state/commonUtilsState';
import {GET_COLUMNS} from '../types'
const commonUtilsReducers = (state = {...commonUtilsState}, action) => {
    if (!state) return {
        column: 'red'
    }
    switch (action.type) {
        case GET_COLUMNS:
            return { ...state, column: action.column }//这里action传入动态色值并同步到state
        default:
            return state
    }
}
export default commonUtilsReducers