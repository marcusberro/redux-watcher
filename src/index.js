import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import reduxThunk from "redux-thunk"
import promise from "redux-promise-middleware"
import rootReducer from './reducers';
import config from './config'
import { fetchWeather } from './actions/weather'

/* ======================================= */
/* Redux Watcher - Polling APIs with Redux */
/* ======================================= */

const middleware = applyMiddleware(
	promise,
  reduxThunk,
  createLogger()
)

// const rootReducer = require('./reducers');

const store = createStore(rootReducer, middleware);

console.log('Welcome to Redux Watcher app');

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
	console.log("Environment: "+process.env.NODE_ENV);
}

if (process.env.DEBUG) {
  console.log('Debugging output');
}

console.log(config);

console.log(process.env.CONFIG);

/* ============================== */
/* Start watching you subjects into REDUX Store HERE!!! */
store.dispatch(fetchWeather());
