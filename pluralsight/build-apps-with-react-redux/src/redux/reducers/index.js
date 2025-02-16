import { combineReducers } from "redux";
import courses from "./courceReducer";
import authors from "./authorsReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsInProgress,
});

export default rootReducer;
