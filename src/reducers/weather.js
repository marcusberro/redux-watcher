
/* Subject initial state */
const initialState = {
	fetching: false,
	fetched: false,
  data: {},
  // temperature: {},
  // feelsLike: {},
  // weatherDescription: "",
  error: null
};

/* Reducer must handle action types - Weather example */
export default (state=initialState, action) => {

  switch (action.type) {
    case "FETCH_WEATHER_PENDING": {
      return {...state, fetching: true}
      break;
    }
    case "FETCH_WEATHER_REJECTED": {
      return {...state, fetching: false, error: action.payload}
      break;
    }
    case "FETCH_WEATHER_FULFILLED": {
      return {...state, fetching: false, fetched: true, data: widgetDataDecorator(action.payload)}
      break;
    }
  }
  return state
}

const widgetDataDecorator = (dataFetched) => {
  return dataFetched;
}
