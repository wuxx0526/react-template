import {GET_COLUMNS}  from '../types'
import http from '../../utils/http';

export const getColumnsAction = (value)=>({
    type: GET_COLUMNS,
    value
})

export const getColumnsList = (params = { qLevel: 1}) => {
    return (dispatch) => {
        http.post('/api/pq/question', params).then(res => {
            if (res.code === '0') {
                res.data.forEach(item => {
                    item.label = item.qType
                    item.value = item.id
                })
                const action = getColumnsAction({...res, isFirst: params.qLevel === 1})
                dispatch(action)
            }
        })
    }
}
