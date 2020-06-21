import React, { Component, Fragment, Grid, flex } from "react";
import { withRouter, Route } from "react-router-dom";

class Sections extends Component {
  state = { section: [] };

  getMaxHeight = (elements) => {
    var tallest = 0;
    var height = 0;

    for (var i; i < elements.length; i++) {
      height = elements[i].height();

      if (height > tallest) tallest = height;
    }

    return tallest;
  };

  render() {
    const education = (
      <div
        style={{
          margin: 8,
          marginTop: 50,
          color: "#343a40",
        }}
      >
        <div className="card border-primary mb-3" style={{ maxWidth: 400 }}>
          <div className="card-header">Education</div>
          <div className="card-body">
            <h4 className="card-title">Undergrad and Grad</h4>
            <p className="card-text">
              Take a look at the courses Robert has taken during his time at
              UTDallas and UCSD.
            </p>
          </div>
        </div>
      </div>
    );
    const internship = (
      <div style={{ margin: 8, marginTop: 50, color: "#343a40" }}>
        <div className="card border-primary mb-3" style={{ maxWidth: 400 }}>
          <div className="card-header">Internship</div>
          <div className="card-body">
            <h4 className="card-title">zGlue and ZhongKe</h4>
            <p className="card-text">
              Understand Robert's work at the two awesome companies.
            </p>
          </div>
        </div>
      </div>
    );
    const projects = (
      <div style={{ margin: 8, marginTop: 50, color: "#343a40" }}>
        <div className="card border-primary mb-3" style={{ maxWidth: 400 }}>
          <div className="card-header">Related Projects</div>
          <div className="card-body">
            <h4 className="card-title">Skills</h4>
            <p className="card-text">
              What skills Robert has learned and what does he do with them.
            </p>
          </div>
        </div>
      </div>
    );
    const extracurricular = (
      <div style={{ margin: 8, marginTop: 50, color: "#343a40" }}>
        <div className="card border-primary mb-3" style={{ maxWidth: 400 }}>
          <div className="card-header">Extracurricular</div>
          <div className="card-body">
            <h4 className="card-title">Outside of work and school</h4>
            <p className="card-text">
              How Robert uses his time outside of the classroom!
            </p>
          </div>
        </div>
      </div>
    );
    return (
      <Fragment>
        <div className="container" style={{ justifyContent: "center" }}>
          <div className="row">
            <div class="col-md-6">
              <a className="nav-link" href="/education">
                <div>{education}</div>
              </a>
            </div>
            <div className="col-md-6">
              <a className="nav-link" href="/internship">
                <div>{internship}</div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <a className="nav-link" href="/projects">
                <div>{projects}</div>
              </a>
            </div>
            <div className="col-md-6">
              <a className="nav-link" href="/extracurricular">
                <div>{extracurricular}</div>
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Sections);
