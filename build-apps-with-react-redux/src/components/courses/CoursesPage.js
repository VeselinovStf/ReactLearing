import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CoursesList";

class CoursesPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadCourses().catch((error) => {
      alert("Error in courses display: " + error);
    });
  }

  render() {
    return (
      <>
        <h1>Courses</h1>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchtoProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchtoProps)(CoursesPage);
