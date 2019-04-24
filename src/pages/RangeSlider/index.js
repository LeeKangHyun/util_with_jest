import React from 'react'

import RangeSlider from '@/components/RangeSlider'

import withController from './Controller'

const RangeComponent = ({ value, onUpdateRange }) => {
  return (
    <div>
      range
      <RangeSlider onUpdateRange={onUpdateRange} maximum={300} value={value} />
      {value.join(' ~ ')}
    </div>
  )
}

export default withController(RangeComponent)
