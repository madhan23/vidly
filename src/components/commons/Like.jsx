import React, { Component } from "react";
class Like extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.attract) classes += "-o";
    return <i onClick={this.props.fg} className={classes} />;
  }
}

export default Like;
