import React from "react";
import { withRouter } from "react-router-dom";

function School() {
  return (
    <div>
      <div className="container" style={{ justifyContent: "center" }}>
        <div className="row">
          <div className="col-md-8">
            <h3>University of California at San Diego</h3>
            <h4>Masters of Science in Computer Science</h4>
          </div>
          <div className="col-md-4">
            <h4>June 2020</h4>
          </div>
        </div>
        {/* <div className="row">
          <h4>Masters of Science in Computer Science</h4>
        </div> */}
        <div className="row">
          <div className="col-md-8">
            <h3>University of Texas at Dallas</h3>
            <h4>Bachelor of Science in Computer Engineering</h4>
          </div>
          <div className="col-md-4">
            <h4>December 2018</h4>
          </div>
        </div>
        {/* <div className="row">
          <h4>Bachelor of Science in Computer Engineering</h4>
        </div> */}
      </div>
    </div>
  );
}

export default withRouter(School);
