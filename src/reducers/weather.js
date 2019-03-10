import {
	FETCH_WEATHER_PENDING,
	FETCH_WEATHER_REJECTED,
	FETCH_WEATHER_FULFILLED,
	weatherDataDecorator
} from '../actions/weather'

/* Subject initial state */
const initialState = {
	fetching: false,
	fetched: false,
  error: null
};

/* Reducer must handle action types - Weather example */
export default (state=initialState, action) => {

  switch (action.type) {
    case FETCH_WEATHER_PENDING: {
      return {...state, fetching: true}
      break;
    }
    case FETCH_WEATHER_REJECTED: {
      return {...state, fetching: false, error: action.payload}
      break;
    }
    case FETCH_WEATHER_FULFILLED: {
      return weatherDataDecorator(action.payload, {...state, fetching: false, fetched: true})
      break;
    }
  }
  return state
}
