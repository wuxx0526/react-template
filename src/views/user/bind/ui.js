import React from 'react'
import './index.less'
import WtCodeButton from "../../../components/wtCodeButton";
import WtSubmitButton from "../../../components/wtSubmitButton";

const Ui = (props) => {
    return (
        <div>
            <ul className="bind-box">
                <li>
                    <div className="name">手机号</div>
                    <div className="content">
                        <input type="number" v-model="mobile" placeholder="请输入手机号"/>
                        <WtCodeButton
                            className="code"
                        />
                    </div>
                </li>
                <li>
                    <div className="name">验证码</div>
                    <div className="content"><input v-model="code" type="text" placeholder="请输入验证码"/></div>
                </li>
            </ul>

            <div className="btns">
                <WtSubmitButton
                    className="success"
                    title="绑定"
                    onClick={props.bindUserByApi}
                />
                <WtSubmitButton
                    className="cancel"
                    title="取消"
                />
            </div>
        </div>
    )
}

export default Ui
