import React, { Component } from 'react'

const Controller = Wrapper =>
  class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        value: [0, 300],
      }
    }

    onChange = () => {}

    onUpdateRange = value => {
      this.setState({
        value: value,
      })
    }

    render() {
      return (
        <Wrapper
          {...this.state}
          {...this.props}
          onUpdateRange={this.onUpdateRange}
        />
      )
    }
  }

export default Controller
