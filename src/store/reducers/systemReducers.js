// import {commonUtilsState} from '../state';
import {GET_SMS_CODE} from '../types'

const systemReducers = (state = {}, action) => {
    switch (action.type) {
        case GET_SMS_CODE:
            // return new Promise()
            return 1
            // return { ...state, column: action.value.data }
        default:
            return state
    }
}
export default systemReducers
