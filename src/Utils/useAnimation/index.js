import React from 'react'

import useAnimation from './customHooks'

const useAnimationComponent = () => {
  const animation1 = useAnimation('linear', 600, 0)
  const animation2 = useAnimation('elastic', 600, 150)
  const animation3 = useAnimation('inExpo', 600, 300)
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Ball innerStyle={{ marginTop: animation1 * 200 - 100 }} />
      <Ball innerStyle={{ marginTop: animation2 * 200 - 100 }} />
      <Ball innerStyle={{ marginTop: animation3 * 200 - 100, marginRight: 0 }} />
    </div>
  )
}

const Ball = ({ innerStyle }) => (
  <div
    style={{
      width: 100,
      height: 100,
      marginRight: '40px',
      borderRadius: '50px',
      backgroundColor: '#4dd5fa',
      ...innerStyle,
    }}
  />
)

export default useAnimationComponent
