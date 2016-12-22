import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as Actions from './actions'
import { withRouter } from 'react-router'
import MainBoardComponents from './components'
class MainBoardWrapper extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                Main-board
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {

    }
}
export default withRouter(connect(mapStateToProps, null)(MainBoardWrapper))