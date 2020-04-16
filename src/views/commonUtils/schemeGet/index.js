import React, {Component} from 'react';
import WtHeader from '../../../components/wtHeader'
import { connect } from 'react-redux'
import {getColumnsList} from '../../../store/actions/commonUtilsActions'
import Ui from './ui'
import http from "../../../utils/http";

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
            }
        }
    }

    componentDidMount () {
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
                    getCodeByApi={this.getCodeByApi.bind(this)}
                />
            </div>
        );
    }

    async getCodeByApi () {
        const res = await http.post(this.props.apiData.apiUrl, this.props.apiData.params)
        if (res.code === '0') {
            console.log('发送成功')
            this.countDown()
        }
    }

    onInputChange (value, name) {
        const {form} = this.state
        this.setState({
            form: {
                ...form,
                [name]: value
            }
        })
    }

    onFirstPickerChange (val) {
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

    onSecondPickerChange (val) {
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SchemeGet);
