import {commonUtilsState} from '../state';
import {GET_COLUMNS} from '../types'
const commonUtilsReducers = (state = {...commonUtilsState}, action) => {
    switch (action.type) {
        case GET_COLUMNS:
            if (action.value.isFirst) {
                return { ...state, column: action.value.data }
            } else {
                return { ...state, columnSecond: action.value.data }
            }
        default:
            return state
    }
}
export default commonUtilsReducers
