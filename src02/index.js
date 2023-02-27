import React from "react";
import ReactDOM from "react-dom";

class List extends React.Component {
  render() {
    return (
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    );
  }
}
ReactDOM.render(<List />, document.getElementById("root"));
