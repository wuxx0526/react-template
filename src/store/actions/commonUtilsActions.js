import {GET_COLUMNS}  from '../types'
import http from '../../utils/http';

export const getColumnsAction = (value)=>({
    type:GET_COLUMNS,
    value
})

export const getColumnsList = () => {
    return (dispatch) => {
        http.post('', {}).then(res => {
            console.log(res)
            const action = getColumnsAction(res.data)
            dispatch(action)
        })
    }
}