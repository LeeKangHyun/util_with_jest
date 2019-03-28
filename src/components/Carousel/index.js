import React, { Fragment } from 'react'
import { map } from 'lodash'
import 'tiny-slider/dist/tiny-slider.css'

import withController from './Controller'


const CarouselComponent = ({
  wrapRef,
  children,
}) => {
  return (
    <Fragment>
      <div ref={wrapRef}>
        {children}
      </div>
    </Fragment>
  )
}

export default withController(CarouselComponent)
