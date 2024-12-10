import { HIDE_BUTTON, SHOW_BUTTON } from '../action'

const initialState = {
  isVisible: true,
}

const buttonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_BUTTON:
      return {
        ...state,
        isVisible: true,
      }
    case HIDE_BUTTON:
      return {
        ...state,
        isVisible: false,
      }
    default:
      return state
  }
}

export default buttonReducer
