
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
	let city = dataFetched.data.actual.stationmeasurements.find(
		(stad) => stad.regio.toUpperCase() === "AMSTERDAM");

		// var person = new Object();
	return {...new Object(),
		city: city.regio,
		weatherdescription: city.weatherdescription,
		sunrise: dataFetched.data.actual.sunrise,
		sunset: dataFetched.data.actual.sunset,
		temperature: city.temperature,
		feelsLike: city.feeltemperature,
		windSpeed: city.windspeed,
		windgusts: city.windgusts,
		precipitation: city.precipitation,
		humidity: city.humidity,
		airpressure: city.airpressure
	};
}
