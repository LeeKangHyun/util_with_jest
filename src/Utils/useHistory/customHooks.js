import { useReducer, useCallback } from 'react'

const initialState = {
  past: [],
  present: null,
  future: []
}

const reducer = (state, action) => {
  const { past, present, future } = state
  
  switch (action.type) {
    case 'UNDO':
      const previous = past[past.length - 1]
      const newPast = past.slice(0, past.length - 1)
      
      return {
        past: newPast,
        present: previous,
        future: [present, ...future]
      }
    case 'REDO':
      const next = future[0]
      const newFuture = future.slice(1)
      
      return {
        past: [...past, present],
        present: next,
        future: newFuture
      }
      
    case 'SET':
      const { newPresent } = action
      console.log(newPresent)
      
      if (newPresent === present) {
        return state
      }
      return {
        past: [...past, present],
        present: newPresent,
        future: []
      }
      
    case 'CLEAR':
    default:
      const { initialPresent } = action
      
      return {
        ...initialState,
        present: initialPresent
      }
  }
}

export default initialPresent => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    present: initialPresent
  })
  
  const canUndo = state.past.length !== 0
  const canRedo = state.future.length !== 0
  
  const undo = useCallback(() => {
    if (canUndo) {
      dispatch({ type: 'UNDO' })
    }
  }, [canUndo, dispatch])
  
  const redo = useCallback(() => {
    if (canRedo) {
      dispatch({ type: 'REDO' })
    }
  }, [canRedo, dispatch])
  
  const set = useCallback(newPresent => dispatch({ type: 'SET', newPresent }), [dispatch])
  const clear = useCallback(() => dispatch({ type: 'CLEAR', initialPresent }), [dispatch, initialPresent])
  
  return { state: state.present, set, undo, redo, clear, canUndo, canRedo }
}

