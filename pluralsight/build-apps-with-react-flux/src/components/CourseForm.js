import React from "react";
import TextInput from "./common/TextInput";

function CourseForm(props) {
  return (
    <>
      <form onSubmit={props.onSubmit}>
        <TextInput
          label="Title"
          id="title"
          value={props.course.title}
          name="title"
          onChange={props.onChange}
          error={props.errors.title}
        />

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <select
            className="form-control"
            name="authorId"
            onChange={props.onChange}
            value={props.course.authorId || ""}
          >
            <option value="1">Jon Dow</option>
            <option value="2">Jane Dow</option>
          </select>
        </div>
        <TextInput
          label="Category"
          id="category"
          value={props.course.category}
          name="category"
          onChange={props.onChange}
          error={props.errors.category}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default CourseForm;
