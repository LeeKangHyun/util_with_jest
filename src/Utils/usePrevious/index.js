import React, { useState } from 'react'

import usePrevious from './customHooks'

const usePreviousComponent = () => {
  const [count, setCount] = useState(0)
  
  const prevCount = usePrevious(count)
  
  return (
    <div>
      <h1>Now: {count}, before: {prevCount}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default usePreviousComponent
