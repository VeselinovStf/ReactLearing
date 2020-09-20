import * as types from "./acrionTypes";
import * as authorApi from "../../api/authorApi";
import { apiHandleErrror, beginApiCall } from "./apiStatusAction";

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch((error) => {
        dispatch(apiHandleErrror(error));
        throw error;
      });
  };
}
