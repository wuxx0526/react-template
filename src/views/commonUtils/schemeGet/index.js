import React, {Component} from 'react';
import {Toast} from "antd-mobile";
import WtHeader from '../../../components/wtHeader'
import {connect} from 'react-redux'
import {getColumnsList, clearColumnSecondAction} from '../../../store/actions/commonUtilsActions'
import Ui from './ui'
import http from "../../../utils/http";
import validate from "../../../utils/validate";

class SchemeGet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                level1PqId: '',
                level1Name: '',
                level2PqId: '',
                level2Name: '',
                yield: '',
                mobile: '',
                code: ''
            },
            apiData: {}
        }
    }

    componentDidMount() {
        this.props.getList()
    }

    render() {
        const {column, columnSecond} = this.props
        return (
            <div>
                <WtHeader
                />
                <Ui
                    column={column}
                    columnSecond={columnSecond}
                    form={this.state.form}
                    onFirstPickerChange={this.onFirstPickerChange.bind(this)}
                    onSecondPickerChange={this.onSecondPickerChange.bind(this)}
                    onInputChange={this.onInputChange.bind(this)}
                    onSubmit={this.submitScheme.bind(this)}
                />
            </div>
        );
    }

    async submitScheme() {
        const {form} = this.state
        if (validate.isEmpty(form.level1PqId)) {
            Toast.info('请选择您遇到的问题！')
            return false
        } else if (validate.isEmpty(form.level2PqId)) {
            Toast.info('请选择您遇到的具体问题！')
            return false
        } else if (validate.isEmpty(form.yield)) {
            Toast.info('请选择一造虾产量！')
            return false
        } else if (validate.isEmpty(form.mobile)) {
            Toast.info('请输入手机号！！')
            return false
        } else if (!validate.checkMobile(form.mobile)) {
            Toast.info('请输入正确的手机号！')
            return false
        } else if (validate.isEmpty(form.code)) {
            Toast.info('请输入验证码！')
            return false
        }
        http.post('/api/pq/get_sulotion', form)
            .then(res => {
                if (res.code === '0') {
                    window.location.href = res.data
                }
            })
    }

    onInputChange(value, name) {
        const {form} = this.state
        this.setState({
            form: {
                ...form,
                [name]: value
            }
        })
    }

    onFirstPickerChange(val) {
        this.props.clearColumnSecond()
        const {form} = this.state
        const {column} = this.props
        const id = val[0]
        const _obj = column.filter(item => item.id === id)[0]
        console.log(_obj)
        this.setState({
            form: {
                ...form,
                level1Name: _obj.qType,
                level1PqId: _obj.id
            }
        })
        this.props.getList({qLevel: 2, preId: val[0]})
    }

    onSecondPickerChange(val) {
        const {form} = this.state
        const {columnSecond} = this.props
        const id = val[0]
        const _obj = columnSecond.filter(item => item.id === id)[0]
        console.log(_obj)
        this.setState({
            form: {
                ...form,
                level2Name: _obj.qType,
                level2PqId: _obj.id
            }
        })
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

export default connect(mapStateToProps, mapDispatchToProps)(SchemeGet);
