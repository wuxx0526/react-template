import React, {Component} from 'react';
import {Toast} from "antd-mobile";
import WtHeader from '../../../components/wtHeader'
import Ui from './ui'
import {connect} from 'react-redux'
import {clearColumnSecondAction, getColumnsList} from "../../../store/actions/commonUtilsActions";
import http from "../../../utils/http";
class Bind extends Component{
    constructor(props) {
        super(props);
        this.state = {
            form: {
                mobile: '',
                code: ''
            }
        }
    }

    render() {
        return (
            <div>
                <WtHeader
                    title="绑定手机号"
                />
                <Ui
                    {...this.PROPS}
                />
            </div>
        )
    }

    PROPS = {
        async bindUserByApi () {
            const res = await http.post('/api/pq/user/regist', this.state.form)
            console.log(res)
        }
    }
}

const mapStateToProps = (state) => {
    return {
        column: state.commonUtilsReducers.column,
        columnSecond: state.commonUtilsReducers.columnSecond
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getList: (params) => {
            const action = getColumnsList(params)
            dispatch(action)
        },
        clearColumnSecond: () => {
            dispatch(clearColumnSecondAction)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bind);
