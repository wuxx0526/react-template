import {GET_COLUMNS}  from '../types'
import http from '../../utils/http';

export const getColumnsAction = (value)=>({
    type: GET_COLUMNS,
    value
})

export const getColumnsList = () => {
    return (dispatch) => {
        http.post('/api/pq/question', { qLevel: 1}).then(res => {
            const action = getColumnsAction()
            dispatch(action, res.data)
        })
    }
}
