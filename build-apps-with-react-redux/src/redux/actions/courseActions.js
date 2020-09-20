import * as types from "./acrionTypes";
import * as COURSES_API from "../../api/courseApi";

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
    return COURSES_API.getCourses()
      .then((courses) => {
        dispatch(loadCourcesSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function saveCourse(course) {
  return function (dispatch) {
    return COURSES_API.saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(updateCourseAction(saveCourse))
          : dispatch(saveCourseAction(savedCourse));
      })
      .catch((error) => {
        throw error;
      });
  };
}
