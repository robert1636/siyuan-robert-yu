import React, { Component } from "react";
import NavBar from "./NavBar/NavBar";
import { Route, Link } from "react-router-dom";
import Life from "./Personal/Personal";
import Sections from "./Professional/Sections";
import Home from "./Home";
import Education from "./Professional/Education/Education";
import Internship from "./Professional/Internship/Internship";
import Projects from "./Professional/Projects/Projects";
import Extracurricular from "./Professional/Extracurricular/Extracurricular";
import { HashRouter } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

class App extends Component {
  render() {
    return (
      <div>
        {/* <HashRouter basename="/siyuan-robert-yu/#"> */}
        <NavBar />
        {/* {window.location.href == "http://localhost:3000/" && <h1> Home</h1>} */}
        <Route exact path="/" component={Home} />
        <Route exact path="/personal" component={Life} />
        <Route exact path="/professional" component={Sections} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/internship" component={Internship} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/extracurricular" component={Extracurricular} />
        {/* <Nav.Link as={Life} to="/personal"></Nav.Link> */}
        {/* </HashRouter> */}
      </div>
    );
  }
}

export default App;
