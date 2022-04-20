import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class index extends Component {
  render() {
    const {children} = this.props
    return (
      <NavLink {...this.props}>{children}</NavLink>
    );
  }
}

export default index;