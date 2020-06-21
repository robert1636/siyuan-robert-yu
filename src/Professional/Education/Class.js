import React, { Component } from "react";
import popover from "./Tooltip.module.css";

class Course extends Component {
  // state() {}
  constructor(props) {
    super(props);
  }
  render() {
    const {
      courseDescription,
      courseLink,
      courseName,
      courseNumber,
      courseColor,
    } = this.props;
    return (
      <a href={courseLink} className={popover.tooltip} target="blank">
        <span className={popover.tooltiptext}>{courseDescription}</span>
        <div className="container">
          <div
            className="row"
            style={{
              border: "3px solid #78C2AD",
              borderColor: courseColor,
              color: "#343a40",
              borderRadius: 6,
            }}
          >
            <div className="col-md-3">{courseNumber}</div>
            <div className="col-md-9">{courseName}</div>
          </div>
        </div>
      </a>
    );
  }
}

export default Course;
