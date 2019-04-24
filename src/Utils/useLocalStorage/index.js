import React from 'react'

import useLocalStorage from './customHooks'

const useLocalStorageComponent = () => {
  const [name, setName] = useLocalStorage('name', 'Bob')
  
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  )
}

export default useLocalStorageComponent
