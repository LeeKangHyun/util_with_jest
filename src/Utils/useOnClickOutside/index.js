import React, { useState, useRef } from 'react'

import useOnClickOutside from './customHooks'

const useOnClickOutsideComponent = () => {
  const ref = useRef()
  const [isOpen, setOpen] = useState(false)
  
  useOnClickOutside(ref, () => setOpen(false))
  
  return (
    <div>
      {isOpen ? (
        <div ref={ref} style={modalStyle}>
          modal,,,,,,,
        </div>
      ):(
        <button onClick={() => setOpen(true)}>Open Modal</button>
      )}
    </div>
  )
}

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '400px',
  width: '100%',
  padding: '50px',
  textAlign: 'center',
  fontSize: '1.2rem',
  backgroundColor: 'white',
  boxShadow: '0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1)'
};


export default useOnClickOutsideComponent
