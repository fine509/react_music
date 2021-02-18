import { createStore, applyMiddleware, compose } from "redux";
import {combineReducers} from 'redux-immutable'
import thunk from 'redux-thunk'
import recommend from "./reduces/recommend";
const reducer = combineReducers({
  recommend,
});

const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store