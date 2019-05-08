import React, { useLayoutEffect, useRef } from 'react'

export default () => {
  const Canvas = useRef(null)
  
  useLayoutEffect(() => {
    let canvas = Canvas.current
    
    if (canvas.getContext) {
      let ctx = canvas.getContext('2d')
      ctx.fillStyle = "rgb(200, 0, 0)"
      ctx.fillRect(10, 10, 50, 50)
      
      ctx.fillStyle = "rgb(0, 0, 200, 0.5)"
      ctx.fillRect(30, 30, 50, 50)
    }
  }, [Canvas])
  
  return <canvas ref={Canvas} width="150" height="150"></canvas>
}
