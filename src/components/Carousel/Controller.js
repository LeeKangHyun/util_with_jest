import React, { useRef, useEffect } from 'react'
import { tns } from 'tiny-slider/src/tiny-slider'

export default Component => function Carousel({...props}) {
  const sliderRef = useRef(null)

  useEffect(() => {
    tns({
      container: sliderRef.current,
      items: 3,
      center: true,
    })
  }, [props.children])
  
  useEffect(() => {
  
  }, [])

  return (
    <Component
      {...props}
      wrapRef={sliderRef}
    />
  )
}
