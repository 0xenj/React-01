import React from "react";
import ReactDOM from "react-dom";

function Shout(props) {
  return <h1>I am the {props.status} of the World!</h1>;
}

const element = <Shout status="King" />;
ReactDOM.render(element, document.getElementById("root"));
