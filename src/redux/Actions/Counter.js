export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT = 'counter/DECREMENT'

export const increase = () => ({
  type: INCREMENT
})

export const decrease = () => ({
  type: DECREMENT
})
