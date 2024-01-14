import { combineReducers } from "redux";

import authReducer from "./authReducers";
import PostReducers from "./postReducers";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export const reducers = combineReducers({authReducer, PostReducers})