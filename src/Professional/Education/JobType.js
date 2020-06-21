import React, { Component, Fragment, Grid, flex } from "react";

class JobType extends Component {
  state = {};
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.onChange(0)}
          type="button"
          className="btn btn-outline-warning"
          style={{
            margin: 8,
            width: 130,
            backgroundColor: this.props.buttonColor == 0 ? "#FFCE67" : "#fff",
            color: this.props.buttonColor == 0 ? "#343a40" : "#FFCE67",
          }}
        >
          General
        </button>
        <button
          onClick={() => this.props.onChange(1)}
          type="button"
          className="btn btn-outline-info"
          style={{
            margin: 8,
            width: 130,
            backgroundColor: this.props.buttonColor == 1 ? "#6CC3D5" : "#fff",
            color: this.props.buttonColor == 1 ? "#343a40" : "#6CC3D5",
          }}
        >
          Firmware
        </button>
        <button
          onClick={() => this.props.onChange(2)}
          type="button"
          className="btn btn-outline-secondary"
          style={{
            margin: 8,
            width: 130,
            backgroundColor: this.props.buttonColor == 2 ? "#F3969A" : "#fff",
            color: this.props.buttonColor == 2 ? "#343a40" : "#F3969A",
          }}
        >
          Software
        </button>
      </div>
    );
  }
}

export default JobType;
