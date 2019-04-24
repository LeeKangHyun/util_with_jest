import React, { useRef } from 'react'

import useOnScreen from './customHooks'

const useOnScreenComponent = () => {
  const ref = useRef()
  
  const onScreen = useOnScreen(ref, '-300px')
  
  return (
    <div>
      <div style={{ height: '100vh' }}>
        <h1>Scroll</h1>
      </div>
      <div
        ref={ref}
        style={{
          height: '100vh',
          backgroundColor: onScreen ? '#23cebd' : '#efefef'
        }}
      >
        {onScreen ? (
          <div>
            <h1>I'm screen</h1>
            <img src="https://i.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif" alt="" />
          </div>
        ):(
          <h1>Scroll down</h1>
        )}
      </div>
    </div>
  )
}

export default useOnScreenComponent
