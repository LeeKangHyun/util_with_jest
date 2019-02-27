import React, { Component } from 'react'

const Controller = Wrapper =>
  class extends Component {
    replaceHistory = () => {}
    render() {
      return <Wrapper {...this.state} {...this.props} />
    }
  }

export default Controller
