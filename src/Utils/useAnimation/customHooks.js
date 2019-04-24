import { useState, useEffect } from 'react'

const easing = (name) => (n) => {
  switch(name) {
    case 'elastic':
      return n * (33 * n * n * n * n - 106 * n * n * n + 126 * n * n - 67 * n + 15)
    case 'inExpo':
      return Math.pow(2, 10 * (n - 1))
    case 'linear':
    default:
      return n
  }
}

const useAnimationTimer = (duration = 1000, delay = 0) => {
  const [elapsed, setTime] = useState(0)
  
  useEffect(() => {
    let animationFrame, timerStop, start
    
    function onFrame() {
      setTime(Date.now() - start)
      loop()
    }
    
    function loop() {
      animationFrame = requestAnimationFrame(onFrame)
    }
    
    function onStart() {
      timerStop = setTimeout(() => {
        cancelAnimationFrame(animationFrame)
        setTime(Date.now() - start)
      }, duration)
      start = Date.now()
      loop()
    }
    
    const timerDelay = setTimeout(onStart, delay)
    
    return () => {
      clearTimeout(timerStop)
      clearTimeout(timerDelay)
      cancelAnimationFrame(animationFrame)
    }
  }, [duration, delay])
  
  return elapsed
}

export default (easingName = 'linear', duration = 500, delay = 0) => {
  const elapsed = useAnimationTimer(duration, delay)
  const n = Math.min(1, elapsed / duration)
  return easing(easingName)(n)
}
