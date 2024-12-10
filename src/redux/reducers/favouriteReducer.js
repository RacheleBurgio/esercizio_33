import { ADD_TO_FAVOURITE, REMOVE_FAVOURITE } from '../action'

const initialState = {
  content: [],
}

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        content: [...state.content, action.payload],
      }
    case REMOVE_FAVOURITE:
      return {
        ...state,
        content: state.content.filter((data) => data._id !== action.payload),
      }
    default:
      return state
  }
}

export default favouriteReducer
