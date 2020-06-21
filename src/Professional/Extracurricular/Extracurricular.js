import React, { Component, Fragment, Grid, flex } from "react";

class Extracurricular extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", margin: 20 }}>
          Honors and Extracurricular Experience
        </h1>
        <ul style={{ textAlign: "center", listStyleType: "none" }}>
          <li>
            <h3>
              Unversity of Texas at Dallas Academic Excellence Scholarship
            </h3>
          </li>
          <li>
            <h3>Unversity of Texas at Dallas Competitive Scholarship</h3>
          </li>
          <li>
            <h3>
              IEEE Tutor in Digital Circuits, Digital Systems, and Electrical
              Network Analysis
            </h3>
          </li>
          <li>
            <h3>
              Mentor at UTD Academic Excellence Scholarship Mentor Program
            </h3>
          </li>
          <li>
            <h3>Volunteer with Butterfly award at Bold Idea</h3>
          </li>
          <li>
            <h3>Officer at the UTDallas Tennis Club</h3>
          </li>
          <li>
            <h3>Player at UTDallas Recreational intramural tournament</h3>
          </li>
        </ul>
      </div>
    );
  }
}

export default Extracurricular;
