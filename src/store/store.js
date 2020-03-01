import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import pinterestReducer from "./reducers/pinterestReducer";

const middlware = [thunk];

const reducer = combineReducers({
  pinterest: pinterestReducer
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancers = composeEnhancers(applyMiddleware(...middlware));
const store = createStore(reducer, enhancers);

export default store;
