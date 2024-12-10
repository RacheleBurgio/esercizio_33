import { combineReducers, configureStore } from '@reduxjs/toolkit'
import favouriteReducer from '../reducers/favouriteReducer'
import jobsReducer from '../reducers/jobsReducer'
import buttonReducer from '../reducers/buttonReducer'

const rootReducer = combineReducers({
  favourites: favouriteReducer,
  jobs: jobsReducer,
  showButton: buttonReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
