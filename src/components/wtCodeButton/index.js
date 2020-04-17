import React, {Component} from 'react';
import './index.less';
import {Button, Toast} from 'antd-mobile';
import validate from "../../utils/validate";
import http from "../../utils/http";

class WtCodeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            codeTxt: '获取验证码',
            countdown: 60, // 倒计时
            isDisabled: false // 禁止点击按钮
        }
        this.timeOut1 = ''
        this.timeOut2 = ''
    }

    static defaultProps = {
        apiData: {
            apiUrl: '/api/pq/smscode',
            params: {
                mobile: 13233334444
            }
        },
        mobile: ''
    }

    render() {
        return (
            <Button
                className={this.props.className}
                disabled={this.state.isDisabled}
                onClick={this.getCodeByApi.bind(this)}
            >
                {this.state.codeTxt}
            </Button>
        );
    }

    async getCodeByApi () {
        if (validate.isEmpty(this.props.mobile)) {
            Toast.info('手机号不能为空')
            return false
        }
        if (!validate.checkMobile(this.props.mobile)) {
            Toast.info('请输入正确的手机号')
            return false
        }
        const res = await http.post(this.props.apiData.apiUrl, this.props.apiData.params)
        if (res.code === '0') {
            console.log('发送成功')
            this.countDown()
        }
    }

    // 验证码倒计时
    countDown () {
        let {countdown} = this.state
        if (countdown === 0) {
            this.setState({
                codeTxt: '重新发送',
                isDisabled: false,
                countdown: 60
            })
        } else {
            this.setState({
                codeTxt: countdown + 's',
                isDisabled: true,
                countdown: --countdown
            })
        }
        this.timeOut1 = setTimeout(() =>{
            this.countDown()
        }, 1000)
    }
}
export default WtCodeButton;
