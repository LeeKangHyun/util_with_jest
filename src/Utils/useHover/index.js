import React from 'react'

import useHover from './customHooks'

const useHoverComponent = () => {
  const [hoverRef, isHovered] = useHover()
  return (
    <div ref={hoverRef}>
      {isHovered ? 'hover':'notHover'}
    </div>
  )
}

export default useHoverComponent
