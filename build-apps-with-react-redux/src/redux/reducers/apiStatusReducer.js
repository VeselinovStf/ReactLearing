import { API_CALL_ERROR, API_CALL_WAIT } from "../actions/acrionTypes";
import initialState from "./initialState";

function apiCallWaitSuccess(type) {
  return type.includes("_SUCCESS");
}

export default function apiStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type === API_CALL_WAIT) {
    return state + 1;
  } else if (
    action.type === API_CALL_ERROR ||
    apiCallWaitSuccess(action.type)
  ) {
    return state - 1;
  }

  return state;
}
