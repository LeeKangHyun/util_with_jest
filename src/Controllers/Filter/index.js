import React, { Component } from 'react'
import qs from 'query-string'

const Controller = Wrapper =>
  class extends Component {
    replaceHistory = () => {
      const { history } = this.props
      history.replace({
        search: `${qs.stringify({
          filters: JSON.stringify({}),
        })}`
      })
    }
    
    render() {
      return <Wrapper {...this.state} {...this.props} />
    }
  }

export default Controller
