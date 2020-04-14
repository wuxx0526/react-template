import React, {Component} from 'react';
import backIcon from '../../../assets/image/icon_back@2x.png'
import './index.less'
class WtHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <section className="wt-header-wrapper">
                    <div className="header--box">
                        <div className="header--box__left">
                            <img src={backIcon} alt="" />
                        </div>
                        <div className="header--box__middle">
                            标题
                        </div>
                        <div className="header--box__right">
                        </div>
                    </div>
                    <div className="header--seat"></div>
                </section>
            </div>
    );
    }
}

export default WtHeader;
