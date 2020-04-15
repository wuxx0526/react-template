import {commonUtilsState} from '../state';
import {GET_COLUMNS} from '../types'
const commonUtilsReducers = (state = {...commonUtilsState}, action) => {
    switch (action.type) {
        case GET_COLUMNS:
            return { ...state, column: action.value }//这里action传入动态色值并同步到state
        default:
            return state
    }
}
export default commonUtilsReducers
