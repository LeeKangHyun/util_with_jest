import React from 'react'

import useWindowSize from './customHooks'

const useWindowSizeComponent = () => {
  const size = useWindowSize()
  
  return (
    <div>
      {size.width}px / {size.height}px
    </div>
  )
}

export default useWindowSizeComponent
