import React, { useRef, useEffect } from 'react'
import { tns } from 'tiny-slider/src/tiny-slider'

export default Component => function Carousel({...props}) {
  const sliderRef = useRef(null)

  useEffect(() => {
    tns({
      items: 3,
      container: sliderRef.current,
      center: true,
    })
  }, [props.children])

  return (
    <Component
      {...props}
      wrapRef={sliderRef}
    />
  )
}
