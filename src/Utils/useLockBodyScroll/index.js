import React, { useState } from 'react'

import useLockBodyScroll from './customHooks'

const Modal = ({ title, content, onClose }) => {
  useLockBodyScroll()
  
  return (
    <div role="button" tabIndex={0} onKeyPress={() => {}} className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
}

const useLockBodyScrollComponent = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setOpen(true)}>Show Modal</button>
      {isOpen && (
        <Modal
          title="Try scrolling"
          content="I bet you you can't! Muahahaha 😈"
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  )
}

export default useLockBodyScrollComponent
