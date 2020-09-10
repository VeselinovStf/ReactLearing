import { combineReducers } from "redux";
import courses from "./courceReducer";
import authors from "./authorsReducer";

const rootReducer = combineReducers({
  courses,
  authors,
});

export default rootReducer;
