import React, { Component, Fragment, Grid, flex } from "react";

class Internship extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", margin: 20 }}>Work Experience</h1>
        <div>
          <div className="container" style={{ justifyContent: "center" }}>
            <div className="row">
              <div class="col-md-10">
                <h4 style={{ fontWeight: "bolder" }}>
                  Internship at Zhong Ke Zhi Xu AI Technology Company,
                  Guangzhou, China
                </h4>
                <p>
                  Researched, developed, and implemented ML algorithms to help
                  the company build solutions for its customers
                </p>
                <ul>
                  <li>
                    <p>
                      Built an object detection software with PyTorch Yolov3 and
                      Keras ResNet50 in Python3 to give warnings if there are
                      workers who are not wearing safety helmet and clothes
                    </p>
                  </li>
                  <li>
                    <p>
                      Added a logic layer between Yolov3 and Keras ResNet50 to
                      improve the overall accuracy
                    </p>
                  </li>
                  <li>
                    <p>
                      The measured mAP reached 43.2 with 900 training and
                      testing images
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <h4>July 2019 – August 2019</h4>
              </div>
            </div>
          </div>
          <div className="container" style={{ justifyContent: "center" }}>
            <div className="row">
              <div class="col-md-10">
                <h4 style={{ fontWeight: "bolder" }}>
                  Internship at zGlue, Mountain View, California
                </h4>
                <p>
                  Responsible for system-level design, debug, documentation,
                  customer inquiries, and application of zGlue technology
                </p>
                <ul>
                  <li>
                    <p>
                      Developed a test plan for an accelerometer (C)
                      <ul>
                        <li>
                          Created a test plan for MC3672, 3-axis Accelerometer
                          sensor evaluation on Silicon vs PCB Board
                        </li>
                        <li>
                          Designed a robotic arm controlled by Arduino UNO to
                          generate motion data
                        </li>
                        <li>
                          Analyzed the data and generated reports for data
                          comparison between Silicon vs PCB Board
                        </li>
                      </ul>
                    </p>
                  </li>
                  <li>
                    <p>
                      Developed a test plan for a magnetometer (C)
                      <ul>
                        <li>
                          Created a test plan for BMM150, 3-axis geomagnetic
                          sensor evaluation on Silicon vs PCB Board
                        </li>
                        <li>
                          Calculated angles with the data and compare the angles
                          with the compass on the phone
                        </li>
                      </ul>
                    </p>
                  </li>
                  <li>
                    <p>
                      Measured the power consumption of a BLE device (C, Python)
                      <ul>
                        <li>
                          Measured the power consumption of nRF52832 when
                          transmitting packages using BLE protocol
                        </li>
                        <li>
                          Programed the nRF52832 to transmit a package to a
                          phone app every second(C)
                        </li>
                        <li>
                          Used ADC on Arduino 101 to read the current
                          consumption of the chip and graphed it in
                          real-time(Python)
                        </li>
                      </ul>
                    </p>
                  </li>
                  <li>
                    <p>
                      Used zGlue platform to drive a Eink screen to display a
                      tag (C)
                      <ul>
                        <li>
                          Snapshot a tag image and displayed on an Eink display
                          driven by nRF52832 on zGlue 2.5D platform
                        </li>
                      </ul>
                    </p>
                  </li>
                  <li>
                    <p>
                      Drew schematic for a daughter board for testing purpose
                      (Cadence)
                      <ul>
                        <li>Drew peripheral circuits for a sensor</li>
                      </ul>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <h4>May 2017 – December 2017</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Internship;
