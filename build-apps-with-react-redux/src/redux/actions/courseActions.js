import * as types from "./acrionTypes";
import * as COURSES_API from "../../api/courseApi";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function loadCourcesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
  return function (dispatch) {
    return COURSES_API.getCourses()
      .then((courses) => {
        dispatch(loadCourcesSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}
