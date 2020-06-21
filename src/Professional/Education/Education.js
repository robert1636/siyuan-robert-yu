import React, { Component, Fragment, Grid, flex } from "react";
import School from "./School";
import JobType from "./JobType";
import Classes from "./Classes";

const red = "#FF7851";
const orange = "#fd7e14";
const purple = "#6f42c1";
const yellow = "#FFCE67";
const green = "#56CC9D";
const cyan = "#6CC3D5";
const primary = "#78C2AD";
const secondary = "#F3969A";
const info = "#6CC3D5";
const warning = "#FFCE67";
const danger = "#FF7851";

class Education extends Component {
  state = {
    highlightedJobButton: 0,
    color: [],
    generalColor: [
      yellow,
      cyan,
      cyan,
      cyan,
      yellow,
      purple, //
      cyan,
      cyan,
      cyan,
      purple,
      purple,
      purple, //
      purple,
      purple, //
      cyan,
      purple,
      yellow,
      purple,
      purple,
      purple,
      yellow, //
      cyan,
      cyan,
      yellow,
      yellow,
      yellow, //
      cyan,
      cyan,
      cyan,
      cyan,
      cyan,
      cyan,
      purple,
      yellow, //
      cyan,
      cyan,
      cyan,
      cyan,
      cyan,
      yellow,
      yellow, //
      cyan,
      cyan,
      cyan,
      cyan,
      cyan,
      cyan,
      cyan, //
      cyan,
      cyan,
      cyan,
      cyan,
      cyan,
      cyan,
      cyan,
      cyan,
      cyan,
      cyan,
      cyan,
      cyan,
      cyan,
      cyan,
      cyan,
      cyan,
      cyan,
    ],
    softwareColor: [
      info,
      danger,
      danger,
      warning,
      info,
      danger, //
      warning,
      danger,
      warning,
      danger,
      info,
      info, //
      danger,
      danger, //
      danger,
      danger,
      info,
      warning,
      info,
      info,
      info, //
      danger,
      danger,
      info,
      info,
      info, //
      warning,
      warning,
      warning,
      warning,
      danger,
      info,
      info,
      info, //
      warning,
      warning,
      warning,
      danger,
      info,
      info,
      info, //
      warning,
      warning,
      warning,
      warning,
      danger,
      danger,
      danger, //
      danger,
      warning, //
      danger,
      warning,
      warning, //
      warning,
      danger,
      danger, //
      danger,
      danger,
      danger,
      danger,
      danger,
      danger,
      danger,
      danger,
      danger,
    ],
    firmwareColor: [
      danger,
      info,
      info,
      info,
      danger,
      info, //
      info,
      info,
      info,
      info,
      danger,
      danger, //
      warning,
      warning, //
      info,
      warning,
      danger,
      warning,
      danger,
      danger,
      danger, //
      info,
      info,
      danger,
      danger,
      danger, //
      info,
      info,
      info,
      info,
      warning,
      warning,
      info,
      danger, //
      info,
      info,
      info,
      warning,
      danger,
      danger,
      danger, //
      info,
      info,
      info,
      info,
      warning,
      info,
      info, //
      info,
      info, //
      info,
      info,
      info, //
      info,
      warning,
      warning, //
      warning,
      warning,
      warning,
      info,
      warning,
      info,
      warning,
      warning,
      warning,
    ],
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.setState({
      color: this.state.generalColor,
    });
    console.log(this.state.color);
  }
  changeJobType = (job_type) => {
    if (job_type == 0) {
      this.setState({
        color: this.state.generalColor,
      });
    } else if (job_type == 1) {
      this.setState({
        color: this.state.firmwareColor,
      });
    } else if (job_type == 2) {
      this.setState({
        color: this.state.softwareColor,
      });
    }
    this.setState({
      highlightedJobButton: job_type,
    });
  };

  render() {
    // console.log(this.state.highlightedJobButton);
    return (
      // add border here
      <div>
        <h1 style={{ textAlign: "center", margin: 20, color: "#343a40" }}>
          Education
        </h1>
        <div className="top">
          <div className="container" style={{ justifyContent: "center" }}>
            <div className="row" style={{}}>
              <div className="col-md-10">
                <School></School>
              </div>
              <div className="col-md-2">
                <JobType
                  onChange={this.changeJobType}
                  buttonColor={this.state.highlightedJobButton}
                ></JobType>
              </div>
            </div>
            <div className="row" style={{}}>
              <div className="col-md-10">
                <Classes courseColors={this.state.color}></Classes>
              </div>
              {/* <div className="col-md-2">
                <p>Scroll bar</p>
              </div> */}
            </div>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    );
  }
}

export default Education;
