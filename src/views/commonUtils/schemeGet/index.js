import React, {Component} from 'react';
import WtHeader from '../../../components/common/wtHeader'
import { connect } from 'react-redux'
import {getColumnsList} from '../../../store/actions/commonUtilsActions'
import Ui from './ui'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount () {
        this.props.getList()
    }

    render() {
        const {column} = this.props
        return (
            <div>
                <WtHeader
                />
                <Ui
                    column={column}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        column: state.commonUtilsReducers.column
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getList: () => {
            const action = getColumnsList()
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(index);
