import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import reduxThunk from "redux-thunk"
import axios from "axios";

/* ======================================= */
/* Redux Watcher - Polling APIs with Redux */
/* ======================================= */

/* Subject initial state */
const initialState = {
	fetching: false,
	fetched: false,

  error: null
};

/* Reducer must handle action types - Weather example */
const reducer = (state=initialState, action) => {

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
      return {...state, fetching: false, fetched: true, data: action.payload}
      break;
    }
  }
  return state
}

const middleware = applyMiddleware(
  reduxThunk,
  createLogger()
)

const store = createStore(reducer, middleware);

/* ============================== */
/* Start watching you subjects into REDUX Store HERE!!! */
store.dispatch((dispatch, getState) => {
  dispatch({type: "FETCH_WEATHER_PENDING"})
  axios.get('https://data.buienradar.nl/2.0/feed/json')
    .then((response) => {
        dispatch({type: "FETCH_WEATHER_FULFILLED", payload: response.data});
    })
    .catch((err) => {
        dispatch({type: "FETCH_WEATHER_REJECTED", payload: err});
    })
});
