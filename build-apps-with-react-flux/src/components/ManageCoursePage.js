import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import { toast } from "react-toastify";
import courseStore from "../stores/courseStore";
import * as courseActions from "../actions/courseActions";

const ManageCoursePage = (props) => {
  const [courses, setCourses] = useState(courseStore.getCourses());

  const [errors, setErrors] = useState({});

  const [course, setState] = useState({
    id: null,
    slug: "",
    authorId: null,
    category: "",
    title: "",
  });

  useEffect(() => {
    courseStore.addChangeListener(onChange);

    const slug = props.match.params.slug;

    if (courses.length === 0) {
      courseActions.loadCourses();
    } else if (slug) {
      setState(courseStore.getCourseBySlug(slug));
    }

    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug]);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  function handleChange({ target }) {
    setState({
      ...course,
      [target.name]: target.value,
    });
  }

  function formIsValid() {
    let _errors = {};

    if (course.title) _errors.title = "Title is invalid";
    if (course.title) _errors.category = "Category is invalid";

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid) return;
    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved.");
    });
  }

  return (
    <>
      <h1>Manage Courses</h1>
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
