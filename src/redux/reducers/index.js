import { combineReducers } from "redux";

import countries from "./countriesReducer";
import sizes from "./sizesReducer";

export default combineReducers({
  countries,
  sizes
});
