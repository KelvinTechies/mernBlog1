import { combineReducers } from "redux";

import authReducer from "./authReducers";
import PostReducers from "./postReducers";


export const reducers = combineReducers({authReducer, PostReducers})