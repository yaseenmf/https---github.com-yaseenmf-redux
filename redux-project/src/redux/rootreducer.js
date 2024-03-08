import { combineReducers } from "redux";
import milkReducer from "./milk/milkreduser";
import cakeReducer from "./cake/cakereducer";
import userReducer from "./user/userreduser";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  milk: milkReducer,
  users: userReducer,
});
