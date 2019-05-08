import React, { useRef, useState, useLayoutEffect } from 'react'

export default () => {
  const [CanvasXSize, setXSize] = useState(800)
  const [CanvasYSize, setYSize] = useState(200)
  const speed = 30
  const scale = 1.05
  const y = -4.5
  const Canvas = useRef(null)
  const img = new Image()
  
  useLayoutEffect(() => {
    img.src = 'https://mdn.mozillademos.org/files/4553/Capitan_Meadows,_Yosemite_National_Park.jpg'
  }, [])
  
  return <canvas ref={Canvas}></canvas>
}
