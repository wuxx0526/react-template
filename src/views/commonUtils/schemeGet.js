import React, {Component} from 'react';
import WtHeader from '../../components/common/wtHeader'
import { connect } from 'react-redux'
import {getColumnsList} from '../../store/actions/commonUtilsActions';

class schemeGet extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount () {
        const action = getColumnsList()
        console.log(action)
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
    console.log(state)
    return {
        column: state.commonUtilsReducers.column
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        /*onSwitchColor: (color) => {
            dispatch({ type: 'CHANGE_COLOR', themeColor: color })
        }*/
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(schemeGet);