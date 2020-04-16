import React from 'react'
import './index.less'
import { InputItem, Picker } from 'antd-mobile'
import WtCodeButton from "../../../components/wtCodeButton";
import icon_down from '../../../assets/image/icon_down@2x.png'
import icon_up from '../../../assets/image/icon_up@2x.png'

const Ui = (props) => {
    const {getCodeByApi, column, onFirstPickerChange, columnSecond, form, onSecondPickerChange, onInputChange} = props
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
                            onOk={onFirstPickerChange}
                    >
                        <div className="choose-question-content">
                            <span className="ellipsis">{form.level1Name}</span>
                            <img v-show="!firstShow" src={icon_down} alt=""/>
                            {/*<img v-show="firstShow" src={icon_up} alt=""/>*/}
                        </div>
                    </Picker>

                </div>
                <div className="choose-question-item">
                    <div className="choose-question-title">请选择您遇到的具体问题</div>
                    <Picker
                        data={columnSecond}
                        title="请选择您遇到的问题"
                        cols={1}
                        onOk={onSecondPickerChange}
                    >
                        <div className="choose-question-content">
                            <span className="ellipsis">{form.level2Name}</span>
                            <img v-show="!firstShow" src={icon_down} alt=""/>
                            {/*<img v-show="firstShow" src={icon_up} alt=""/>*/}
                        </div>
                    </Picker>
                </div>
            </div>

            {/*造虾产量*/}
            <div className="production-num">
                <div className="production-num-title">一造虾产量（斤）</div>
                <InputItem
                    type="digit"
                    className="production-num-input"
                    onChange={value => {onInputChange(value, 'yield')}}
                />
            </div>

            {/*手机号验证*/}
            <div className="verify-phone">
                <div className="verify-phone-title">输入手机号</div>
                <InputItem
                    type="digit"
                    className="verify-phone-input"
                    onChange={value => {onInputChange(value, 'mobile')}}
                />
                <div className="verify-code-box">
                    <InputItem
                        type="digit"
                        className="verify-code-input"
                        onChange={value => {onInputChange(value, 'code')}}
                    />
                    <WtCodeButton
                        className="verify-code-btn"
                        getCodeByApi={getCodeByApi}
                    />
                </div>
            </div>
        </div>
    )
}

export default Ui
