export const initialState = { number: 0, count: 0 }
export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'

export const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { number: state.number + 1, count: state.count + 1 }
    case DECREMENT:
      return { number: state.number - 1, count: state.count - 1 }
    default:
      return state
  }
}