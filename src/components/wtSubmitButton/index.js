import React, {Component} from 'react';
import './index.less';
import {Button, Toast} from 'antd-mobile';
import validate from "../../utils/validate";
import http from "../../utils/http";

class WtSubmitButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisabled: false
        }
        this.timeOut1 = ''
    }

    render() {
        return (
            <Button
                className={this.props.className}
                disabled={this.state.isDisabled}
                onClick={this.onClick.bind(this)}
            >
                {this.props.title}
            </Button>
        );
    }

    onClick () {
        this.setState({
            isDisabled: true
        })
        this.timeOut1 = setTimeout(() => {
            this.setState({
                isDisabled: false
            })
        }, 1000)
        this.props.onClick && this.props.onClick()
    }
}
export default WtSubmitButton;
