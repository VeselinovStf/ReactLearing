import * as types from "./acrionTypes";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}
