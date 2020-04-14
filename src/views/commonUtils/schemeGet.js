import React, {Component} from 'react';
import WtHeader from '../../components/common/wtHeader'
import { connect } from 'react-redux'

class schemeGet extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <WtHeader
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.ColorReducers.themeColor
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            dispatch({ type: 'CHANGE_COLOR', themeColor: color })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(schemeGet);