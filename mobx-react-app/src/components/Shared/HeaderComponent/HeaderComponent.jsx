import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <React.Fragment>Header Component</React.Fragment>;
  }
}

export default withRouter(HeaderComponent);
