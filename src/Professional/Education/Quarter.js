import React from "react";
import { withRouter } from "react-router-dom";

function Quarter(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>{props.quarter}</h3>
    </div>
  );
}

export default withRouter(Quarter);
