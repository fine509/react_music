import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import recommend from "./reduces/recommend";
const reducer = combineReducers({
  recommend,
});

const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store