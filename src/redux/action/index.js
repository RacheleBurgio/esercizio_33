export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE'
export const GET_JOBS = 'GET_JOBS'
export const SHOW_BUTTON = 'SHOW_BUTTON'
export const HIDE_BUTTON = 'HIDE_BUTTON'

export const removeFavouriteAction = (id) => ({
  type: REMOVE_FAVOURITE,
  payload: id,
})
// export const addToFavouriteAction = (data) => ({
//   type: ADD_TO_FAVOURITE,
//   payload: data,
// })

export const addToFavouriteAction = (data) => {
  return (dispatch, getState) => {
    const currentState = getState()
    const isFavourited =
      currentState.favourites.content.findIndex(
        (fav) => fav._id === data._id
      ) !== -1

    if (!isFavourited) {
      dispatch({
        type: ADD_TO_FAVOURITE,
        payload: data,
      })
    } else {
      alert('This job has already been saved')
    }
  }
}

export const getJobsAction = (query) => {
  return async (dispatch, getState) => {
    console.log('GET STATE', getState())
    const baseEndpoint =
      'https://strive-benchmark.herokuapp.com/api/jobs?search='

    try {
      const response = await fetch(`${baseEndpoint}${query}&limit=20`)
      if (response.ok) {
        const data = await response.json()
        dispatch({ type: GET_JOBS, payload: data.data })
      } else {
        console.error('Failed to fetch jobs')
      }
    } catch (error) {
      console.error('Error fetching jobs:', error)
    }
  }
}

export const showButton = () => ({
  type: SHOW_BUTTON,
})
export const hideButtons = () => ({
  type: HIDE_BUTTON,
})
