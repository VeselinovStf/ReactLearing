import { combineReducers } from "redux";
import courses from "./courceReducer";

const rootReducer = combineReducers({
  courses,
});

export default rootReducer;
