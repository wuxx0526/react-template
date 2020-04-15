import React, {Component} from 'react';
import backIcon from '../../assets/image/icon_back@2x.png'
import './index.less'
import { withRouter } from 'react-router-dom'

class WtHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.back = this.back.bind(this)
    }

    render() {
        return (
            <section className="wt-header-wrapper">
                <div className="header--box">
                    <div className="header--box__left" onClick={this.back}>
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
        );
    }

    back () {
        // this.props.history.goBack()
        this.props.history.goBack()
    }
}

export default withRouter(WtHeader);
