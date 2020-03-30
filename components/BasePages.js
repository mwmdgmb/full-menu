import React, { Component, Children } from 'react'

export class BasePages extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="container">
        {children}
      </div>
    )
  }
}

export default BasePages
