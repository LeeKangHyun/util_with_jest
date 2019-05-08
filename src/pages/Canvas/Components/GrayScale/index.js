import React, { useRef, useLayoutEffect, useCallback } from 'react'

export default () => {
  const Canvas = useRef(null)
  const img = new Image()
  const Invert = useRef(null)
  const GrayScale = useRef(null)
  
  const draw = useCallback(() => {
    const canvas = Canvas.current
    const ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0)
    img.style.display = 'none'
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    let data = imageData.data
    
    const onInvert = function() {
      for (let i = 0; i < data.length; i += 4) {
        data[i] = 255 - data[i] // red
        data[i + 1] = 255 - data[i + 1] // green
        data[i + 2] = 255 - data[i + 2] // blue
      }
      ctx.putImageData(imageData, 0, 0)
    }
    
    const onGrayScale = function() {
      for (let i = 0; i < data.length; i += 4) {
        let avg = (data[i] + data[i + 1] + data[i + 2]) / 3
        data[i] = avg
        data[i + 1] = avg
        data[i + 2] = avg
      }
      ctx.putImageData(imageData, 0, 0)
    }
    
    return [
      onInvert,
      onGrayScale,
    ]
  }, [])
  
  useLayoutEffect(() => {
    img.src = require('@/images/Meong.png')
    img.crossOrigin = "Anonymous"
    img.onload = function() {
      const [ onInvert, onGrayScale ] = draw()
      Invert.current.addEventListener('click', onInvert)
      GrayScale.current.addEventListener('click', onGrayScale)
    }
  }, [img, draw])
  
  
  return (
    <div>
      <canvas ref={Canvas}>
      
      </canvas>
      <button ref={Invert}>Invert</button>
      <button ref={GrayScale}>GrayScale</button>
    </div>
  )
}
