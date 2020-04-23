import React, {Component} from 'react';
import {Toast} from "antd-mobile";
import WtHeader from '../../../components/wtHeader'
import Ui from './ui'
import http from "../../../utils/http";
import validate from "../../../utils/validate";

class Bind extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                mobile: '',
                code: ''
            },
            apiData: {
                apiUrl: '/api/pq/user/smscode',
                params: {
                    mobile: ''
                }
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
                    bindUserByApi={this.bindUserByApi.bind(this)}
                    apiData={this.state.apiData}
                    onInputChange={this.onInputChange.bind(this)}
                />
            </div>
        )
    }

    async bindUserByApi() {
        const {form} = this.state
        if (validate.isEmpty(form.mobile)) {
            Toast.info('请输入手机号！！')
            return false
        } else if (!validate.checkMobile(form.mobile)) {
            Toast.info('请输入正确的手机号！')
            return false
        } else if (validate.isEmpty(form.code)) {
            Toast.info('请输入验证码！')
            return false
        }
        const res = await http.post('/api/pq/user/regist', form)
        if (res.code === '0') {
            this.props.history.push('/')
        }
    }

    onInputChange(value, name) {
        const {form} = this.state
        console.log(value, name)
        this.setState({
            form: {
                ...form,
                [name]: value
            }
        })
        if (name === 'mobile') {
            this.setState({
                apiData: {
                    ...this.state.apiData,
                    params: {
                        mobile: value
                    }
                }
            })
        }
    }
}

export default Bind;
