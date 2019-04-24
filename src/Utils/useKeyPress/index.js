import React from 'react'

import useKeyPress from './customHooks'

const useKeyPressComponent = () => {
  const h = useKeyPress('h')
  const j = useKeyPress('j')
  const k = useKeyPress('k')
  const l = useKeyPress('l')
  return (
    <div>
      <div>h, j, k, l</div>
      <div>
        {h && 'h'}
        {j && 'j'}
        {k && 'k'}
        {l && 'l'}
      </div>
    </div>
  )
}

export default useKeyPressComponent
