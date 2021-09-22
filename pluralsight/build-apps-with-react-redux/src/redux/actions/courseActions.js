import * as types from "./acrionTypes";
import * as COURSES_API from "../../api/courseApi";
import { apiHandleErrror, beginApiCall } from "./apiStatusAction";

export default function deleteCourseOptimistic(course) {
  return { type: types.DELETE_COURSE_OPTIMISTIC , course};
}


export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function loadCourcesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseAction(updateCourse) {
  return { type: types.UPDATE_COURSE_SECCESS, updateCourse };
}

export function saveCourseAction(saveCourse) {
  return { type: types.SAVE_COURSE_SUCCESS, saveCourse };
}

export function loadCourses() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return COURSES_API.getCourses()
      .then((courses) => {
        dispatch(loadCourcesSuccess(courses));
      })
      .catch((error) => {
        dispatch(apiHandleErrror(error));
        throw error;
      });
  };
}

export function saveCourse(course) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return COURSES_API.saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(updateCourseAction(saveCourse))
          : dispatch(saveCourseAction(savedCourse));
      })
      .catch((error) => {
        dispatch(apiHandleErrror(error));
        throw error;
      });
  };
}

export function deleteCourse(course) {
  return function (dispatch) {
    dispatch(deleteCourseOptimistic(course))
    return COURSES_API.deleteCourse(course.id)
  }
}
