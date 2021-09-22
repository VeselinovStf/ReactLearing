import * as TYPES from "./acrionTypes";

export function beginApiCall() {
  return { type: TYPES.API_CALL_WAIT };
}
export function apiHandleErrror() {
  return { type: TYPES.API_CALL_ERROR };
}
