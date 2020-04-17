import {GET_SMS_CODE}  from '../types'
import http from '../../utils/http';

export const getCodeByApiAction = (params = { qLevel: 1}) => {
    return (dispatch) => {
        http.post('/api/pq/question', params).then(res => {
            return res.code === '0';
        })
    }
}