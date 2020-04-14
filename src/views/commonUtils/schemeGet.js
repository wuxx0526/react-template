import React, {Component} from 'react';
import WtHeader from '../../components/common/wtHeader'
import { connect } from 'react-redux'
import {getColumnsList} from '../../store/actions/commonUtilsActions'


class schemeGet extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount () {
        this.props.getList()
    }

    render() {
        return (
            <div>
                <WtHeader
                    onClick={this.props.getColumnsList}
                />
                {
                    this.props.column.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    })
                }
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
            console.log(action)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(schemeGet);
