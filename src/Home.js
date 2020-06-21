import React, { Component, Fragment } from "react";
import style from "./Frame.module.css";

class Home extends Component {
  state = {};
  render() {
    const profile = (
      <img
        className={style.frame}
        src={require("./images/Profile.jpg")}
        alt="profile picture"
        style={{ height: 300, width: 400, margin: 10 }}
      ></img>
    );
    const introduction = (
      <div style={{ margin: 8, marginTop: 50 }}>
        <p>
          Hello! My name is Siyuan Yu. I am a Computer Science Master student
          from University Of California at San Diego. I am from Guangzhou,
          China, the city of five goats, also the city of flowers. It is a
          beautiful city with a long history. I studied Computer Engineering in
          my undergraduate with a focus on Embedded Systems and I had worked at
          a semiconductor company for seven months. In the graduate school, I am
          studying Computer Science with a focus of Artificial Intelligence.
          Right now, I am particularly interested in building full stack
          applications with the help of machine learning to help improve
          people’s life quality. Outside of school and work, I am an extremely
          outdoorsy person, which is why the quarantine is driving me CRAZY 😄
          (but please stay home and stay safe). When the pandemic is over, I
          would like to look for friendly people to play tennis, basketball,
          soccer, or simply go hiking! I also enjoy playing classical piano
          music. Bach is too hard for me, but I like playing some Mozart 🙂
          Thank y’all for reading through such a long description!Now that you
          have gotten an image of me, please shoot me a message if you would
          like to connect with me! My biggest passion is to make friends! Have a
          good rest of the day with food and stay safe 😉
        </p>
      </div>
    );
    return (
      <Fragment>
        {/* <div className="content" style={{ justifyContent: "center" }}>
          <div className="row">
            <div className="col-md-4"> */}
        <div style={{ margin: 50 }}>
          <div>{profile}</div>
          {/* </div> */}
          {/* <div className="col-md-8"> */}
          <div style={{ width: 1000 }}>{introduction}</div>
        </div>
        {/* </div>
          </div>
        </div> */}
      </Fragment>
    );
  }
}

export default Home;
