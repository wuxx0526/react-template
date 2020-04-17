import {commonUtilsState} from '../state';
import {GET_COLUMNS, CLEAR_COLUMNS_SECOND} from '../types'
const commonUtilsReducers = (state = {...commonUtilsState}, action) => {
    switch (action.type) {
        case GET_COLUMNS:
            if (action.value.isFirst) {
                return { ...state, column: action.value.data }
            } else {
                return { ...state, columnSecond: action.value.data }
            }
        case CLEAR_COLUMNS_SECOND:
             return { ...state, columnSecond: [] }
        default:
            return state
    }
}
export default commonUtilsReducers
