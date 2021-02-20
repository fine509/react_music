import { createStore, applyMiddleware, compose } from "redux";
import {combineReducers} from 'redux-immutable'
import thunk from 'redux-thunk'


import recommend from "./reduces/recommend";
import player from './reduces/player'
const reducer = combineReducers({
  recommend,
  player,
});

const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store