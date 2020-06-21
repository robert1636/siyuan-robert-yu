import React, { Component, Fragment, Grid, flex } from "react";

class Projects extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", margin: 20 }}>Related Projects</h1>
        <div className="container" style={{ justifyContent: "center" }}>
          <div className="row">
            <h4 style={{ fontWeight: "bolder" }}>
              Built a query execution engine that receives the simplified XQuery
              and an input XML file and evaluates the query using a recursive
              evaluation routine (Java)
            </h4>
            <ul>
              <li>
                <p>
                  Provided with a grammar, used Antlr4 to build the lexer and
                  the parser
                </p>
              </li>
              <li>
                <p>
                  Given an XQuery expression (path, concatenation, element
                  creation, etc) and a list of input nodes, produced a list of
                  output nodes
                </p>
              </li>
            </ul>
            <h4 style={{ fontWeight: "bolder" }}>
              Implemented and optimized matrix multiplication for NVIDIA’s
              Kepler GPU hosted on AWS EC2 (Cuda)
            </h4>
            <ul>
              <li>
                <p>
                  Improved performance significantly by buffering frequently
                  accessed data in fast on-chip shared memory(shared memory,
                  registers)
                </p>
              </li>
              <li>
                <p>
                  Used little’s law to balance thread-level parallelism and
                  instruction-level parallelism
                </p>
              </li>
            </ul>
            <h4 style={{ fontWeight: "bolder" }}>
              Implemented Aliev-Panfilov cardiac simulation on Parallel System
              with MPI (C)
            </h4>
            <ul>
              <li>
                <p>
                  Given arbitrary one and two-dimensional processor geometries,
                  divided the mesh evenly in process 0, and then it distributed
                  the values to other processes
                </p>
              </li>
              <li>
                <p>
                  Handled the ghost cells and then integrated the result in
                  process 0 using MPI_reduce()
                </p>
              </li>
            </ul>
            <h4 style={{ fontWeight: "bolder" }}>
              Designed the flow function and Implemented LLVM Static and Dynamic
              Analysis (C++)
            </h4>
            <ul>
              <li>
                <p>Built a forward reaching definition analysis</p>
              </li>
              <li>
                <p>Built a backward liveness analysis</p>
              </li>
              <li>
                <p>Built a may-point-to analysis for pointers</p>
              </li>
              <li>
                <p>
                  Built a data structure for the may-point-to set for global
                  variables and built an interprocedural analysis for
                  constant-propagation analysis
                </p>
              </li>
            </ul>
            <h4 style={{ fontWeight: "bolder" }}>
              Built a Clothes Size Recommend web application (Python)
            </h4>
            <ul>
              <li>
                <p>
                  Built a recommender system for online clothes renting websites
                  to predict customers’ real clothes size and recommended it to
                  the customers to lower the returning rate of the products
                </p>
              </li>
              <li>
                <p>
                  Used regression model and latent factor model and achieved
                  0.624 Area Under the Curve with data from RentTheRunway
                </p>
              </li>
            </ul>
            <h4 style={{ fontWeight: "bolder" }}>
              Implemented a Kneser-Ney Trigram smoothing model (Java)
            </h4>
            <ul>
              <li>
                <p>
                  Implemented an open address hashmap with bit-packing to store
                  keys in arrays of long types, and stored counts in another
                  array of integers to be memory efficient
                </p>
              </li>
            </ul>
            <h4 style={{ fontWeight: "bolder" }}>
              Built a KanBan Board for a hiring process (JavaScript)
            </h4>
            <ul>
              <li>
                <p>
                  Built a KanBan board that let HR add and comment on the
                  candidates, drag and drop the candidates to different stages
                  in the interview process
                </p>
              </li>
              <li>
                <p>
                  Used react-beautiful-dnd for the drag and drop feature, Auth0
                  for the login, react for the frontend, node for the backend
                </p>
              </li>
            </ul>
            <h4 style={{ fontWeight: "bolder" }}>
              Built a chat-app (JavaScript)
            </h4>
            <ul>
              <li>
                <p>
                  Created a chat session application (socket programming) which
                  users could create a chat room and communicate with each other
                  in React.js and Node.js
                </p>
              </li>
              <li>
                <p>Used the MongoDB for Database</p>
              </li>
            </ul>
            <h4 style={{ fontWeight: "bolder" }}>
              Built a real-time parking system (C, JavaScript)
            </h4>
            <ul>
              <li>
                <p>
                  Created an app providing parking spot updates to UTD students
                  using JeVois cameras with MobileNet Tensorflow to perform
                  object recognition of open and full parking spots
                </p>
              </li>
              <li>
                <p>
                  Used an Arduino Yun wired to the JeVois camera to send the
                  spots statuses to a MongoDB Database via WIFI
                </p>
              </li>
              <li>
                <p>
                  Wrote the web API with React.js which rendered the mapping of
                  the spots to users
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
