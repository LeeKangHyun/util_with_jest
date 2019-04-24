import React, { useState, useMemo } from 'react'

const useMemoComponent = () => {
  const [count, setCount] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)
  
  const words = ['hey', 'this', 'is', 'cool']
  const word = words[wordIndex]
  
  const computeLetterCount = word => {
    let i = 0
    while ( i < 1000000000) i++
    return word.length
  }
  
  const letterCount = useMemo(() => computeLetterCount(word), [word])
  
  return (
    <div>
      <h2>{word} has {letterCount}</h2>
      <button
        onClick={() => {
          const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1
          setWordIndex(next)
        }}
      >
        Next
      </button>
      <h2>Increment a count</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default useMemoComponent
