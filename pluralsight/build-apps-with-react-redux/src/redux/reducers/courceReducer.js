import * as types from "../actions/acrionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.UPDATE_COURSE_SECCESS:
      return state.map((course) =>
        course.id === action.course.id ? action.course : course
      );
    case types.SAVE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
    case types.CREATE_COURSE:
      return [...state, { ...action.course }];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.DELETE_COURSE_OPTIMISTIC:
      return state.filter(course => course.id !== action.course.id)
    default:
      return state;
  }
}
