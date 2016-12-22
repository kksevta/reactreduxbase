import React, { Component } from 'react';
import { withRouter } from 'react-router';
import MainBoardModule from './main-board'
class AppWrapper extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {

  }

  render() {
    return (
      <div id="container" class="container-fluid">
        <MainBoardModule.wrapper />
      </div>
    );
  }
}
export default withRouter(AppWrapper);