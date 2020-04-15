import React from 'react'
import './index.less'
import { Button, InputItem, Picker, List } from 'antd-mobile'
import icon_down from '../../../assets/image/icon_down@2x.png'
import icon_up from '../../../assets/image/icon_up@2x.png'

const Ui = (props) => {
    const {column} = props
    // const column = [{label: '1', value: 1}]
    console.log(column)
    return (
        <div className="container">
            {/*banner*/}
            <div className="top-banner">
                <img src={require('../../../assets/image/banner@2x.png')} alt=""/>
            </div>

            {/*选择问题*/}
            <div className="choose-question">
                <div className="choose-question-item choose-question-first">
                    <div className="choose-question-title">请选择您遇到的问题</div>
                    <Picker
                            data={column}
                            title="请选择您遇到的问题"
                            cols={1}
                            format={item => item.qType}
                            onOk={e => console.log('ok', e)}
                            onDismiss={e => console.log('dismiss', e)}
                    >
                        <div className="choose-question-content">
                            <span className="ellipsis">2</span>
                            <img v-show="!firstShow" src={icon_down} alt=""/>
                            {/*<img v-show="firstShow" src={icon_up} alt=""/>*/}
                        </div>
                    </Picker>

                </div>
                <div className="choose-question-item">
                    <div className="choose-question-title">请选择您遇到的具体问题</div>
                    <div className="choose-question-content">
                        <span className="ellipsis">1</span>
                        <img v-show="!secondShow" src={icon_down} alt=""/>
                        {/*<img v-show="secondShow" src={icon_up} alt=""/>*/}
                    </div>
                </div>
            </div>

            {/*造虾产量*/}
            <div className="production-num">
                <div className="production-num-title">一造虾产量（斤）</div>
                <InputItem
                    type="digit"
                    className="production-num-input"
                />
            </div>

            {/*手机号验证*/}
            <div className="verify-phone">
                <div className="verify-phone-title">输入手机号</div>
                <InputItem
                    type="digit"
                    className="verify-phone-input"
                />
                <div className="verify-code-box">
                    <InputItem
                        type="digit"
                        className="verify-code-input"
                    />
                    <Button className="verify-code-btn">获取验证码</Button>
                </div>
            </div>
        </div>
    )
}

export default Ui
