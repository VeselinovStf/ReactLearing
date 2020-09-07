import React from "react";
import { connect } from "react-redux";
import createCourse from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
  };

  handeleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(createCourse(this.state.course));
  };

  render() {
    return (
      <form onSubmit={this.handeleSubmit}>
        <h1>Courses</h1>
        <h4>Add Course</h4>
        <input
          type="text"
          value={this.state.course.title}
          onChange={this.handleChange}
        />
        <input type="submit" className="btn btn-primary" />
        <hr />
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(CoursesPage);
