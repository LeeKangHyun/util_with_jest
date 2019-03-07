import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import withController from '@/Controllers/Filter'
import { changeFilter } from '@/redux/Actions/Filters'

const Filter = ({ filters }) => {
  return (
    <pre>
      {JSON.stringify(filters, null, 2)}
    </pre>
  )
}

export default compose(
  withRouter,
  connect(
    ({ filters }) => ({ filters }),
    { changeFilter },
  ),
  withController,
)(Filter)
