import React, { useState } from 'react'

import useEventListener from './customHooks'

const useEventListenerComponent = () => {
  const [[x, y], setCoords] = useState([0, 0])
  
  useEventListener('mousemove', ({ clientX, clientY }) => {
    setCoords([clientX, clientY])
  })
  
  return (
    <div>
      <h1>
        {x}, {y}
      </h1>
    </div>
  )
}

export default useEventListenerComponent
