import { GET_JOBS } from '../action'

const initialState = {
  jobs: [],
}

function jobsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_JOBS:
      return { ...state, content: action.payload }
    default:
      return state
  }
}

export default jobsReducer
