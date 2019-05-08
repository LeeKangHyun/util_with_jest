import React, { useRef, useCallback, useState, useLayoutEffect } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  width: 100%;
`

const CanvasComponent = styled.canvas`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`

export default () => {
  const [width, setWidth] = useState(300)
  const [height, setHeight] = useState(150)
  const [ctx, setCtx] = useState(null)
  const img = new Image()
  
  const Canvas = useRef(null)
  const Color = useRef(null)
  
  useLayoutEffect(() => {
    img.src = require('@/images/Meong.png')
    img.crossOrigin = "Anonymous"
  }, [img])
  
  const pick = useCallback((event) => {
    const color = Color.current
    let x = event.layerX
    let y = event.layerY
    console.log(x, y)
    let pixel = ctx.getImageData(x, y, 1, 1)
    let data = pixel.data
    let rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`
    
    color.style.background = rgba
    color.textContent = rgba
  }, [Canvas, ctx])
  
  useLayoutEffect(() => {
    const canvas = Canvas.current
    setCtx(canvas.getContext('2d'))
    
    canvas.addEventListener('mousemove', pick)
    
    return () => {
      canvas.removeEventListener('mousemove', pick)
    }
  }, [pick])
  
  useLayoutEffect(() => {
    if (ctx) {
      img.onload = function() {
        const {width, height} = img
        setWidth(width)
        setHeight(height)
        ctx.drawImage(img, 0, 0)
        img.style.display = 'none'
      }
    }
  }, [Canvas, img, ctx])
  
  
  return (
    <Wrap>
      <CanvasComponent ref={Canvas} width={width} height={height} />
      <div ref={Color}>
        rgba(0, 0, 0, 0)
      </div>
    </Wrap>
  )
}
