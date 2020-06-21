import React, { Component } from "react";
import under_construction from "../under_construction.jpg";
import InstagramEmbed from "react-instagram-embed";

(function (d, s, id) {
  var js;
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://embedsocial.com/embedscript/in.js";
  d.getElementsByTagName("head")[0].appendChild(js);
})(document, "script", "EmbedSocialInstagramScript");

class Life extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", margin: 20 }}>Instagram</h1>
        <div
          class="embedsocial-instagram"
          data-ref="495f4d481aafeeb9d051657c04f4f85b25f6d116"
        ></div>
        {/* <InstagramEmbed
          url="https://www.instagram.com/p/Bb0uOkMgSwE/"
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        /> */}

        {/* <img
          src={under_construction}
          alt="Under Construction"
          style={{
            textAlign: "center",
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            height: 300,
            width: 300,
          }}
        ></img> */}
      </div>
    );
  }
}

export default Life;
