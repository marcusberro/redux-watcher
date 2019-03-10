import axios from "axios";

const FETCH_WEATHER_API = 'https://data.buienradar.nl/2.0/feed/json'
const FETCH_WEATHER = 'FETCH_WEATHER'
export const FETCH_WEATHER_PENDING = FETCH_WEATHER+'_PENDING'
export const FETCH_WEATHER_REJECTED = FETCH_WEATHER+'_REJECTED'
export const FETCH_WEATHER_FULFILLED = FETCH_WEATHER+'_FULFILLED'

export function fetchWeather(){
  return {
    type: FETCH_WEATHER,
    payload: axios.get(FETCH_WEATHER_API)
  }
}

export const weatherDataDecorator = (dataFetched, state) => {
  let city = dataFetched.data.actual.stationmeasurements.find(
 		(stad) => stad.regio.toUpperCase() === "AMSTERDAM");

 	return {...state,
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
