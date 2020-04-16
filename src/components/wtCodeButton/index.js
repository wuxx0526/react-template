import React, {Component} from 'react';
import './index.less'
import {Button} from 'antd-mobile';
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
                mobile: 13233334444,
                email: ''
            }
        }
    }

    render() {
        return (
            <Button
                className={this.props.className}
                onClick={this.getCodeByApi.bind(this)}
            >
                {this.state.codeTxt}
            </Button>
        );
    }

    async getCodeByApi () {
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
