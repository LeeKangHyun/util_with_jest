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
        /*const canvas = ctx.canvas;
        let hRatio = canvas.width / img.width
        let vRatio = canvas.height / img.height
        let ratio = Math.min(hRatio, vRatio)
        
        let centerShift_x = (canvas.width - img.width * ratio) / 2
        let centerShift_y = (canvas.height - img.height * ratio) / 2
        
        ctx.clearRect(0, 0, img.width, img.height)
        
        ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio)*/
        ctx.drawImage(img, 0, 0)
        // img.style.display = 'none'
      }
    }
  }, [Canvas, img, ctx])
  
  
  return (
    <Wrap>
      <CanvasComponent ref={Canvas} width={width} height={height}></CanvasComponent>
      <div ref={Color} />
    </Wrap>
  )
}
