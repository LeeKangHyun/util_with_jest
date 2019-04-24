import React from 'react'

import useHistory from './customHooks'
import './styles.scss'

const useHistoryComponent = () => {
  const { state, set, undo, redo, clear, canUndo, canRedo } = useHistory({})
  return (
    <div className="container">
      <div className="controls">
        <button onClick={undo} disabled={!canUndo}>Undo</button>
        <button onClick={redo} disabled={!canRedo}>Redo</button>
        <button onClick={clear}>Clear</button>
      </div>
      <div className="grid">
        {((blocks, i, len) => {
          while (++i <= len) {
            const index = i
            blocks.push(
              <div
                onClick={() => set({ ...state, [index]: !state[index] })}
                className={'block' + (state[index] ? ' active':'')}
                onKeyPress={() => {}}
                key={i}
                role={"button"}
                tabIndex={i}
              />
            )
          }
          return blocks
        })([], 0, 625)}
      </div>
    </div>
  )
}

export default useHistoryComponent
