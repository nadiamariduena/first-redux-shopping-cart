import { combineReducers } from "redux";
import basketReducer from "./basketReducer";

export default combineReducers({
  basketState: basketReducer,
});
// CAREFUL with typing combineReducer instead of combineReducers in line 1 and 4
