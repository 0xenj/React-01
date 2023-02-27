import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
      <div>
        <User user={this.props.user} />
        <Today date={this.props.date} />
      </div>
    );
  }
}

class User extends Component {
  render() {
    return <h1>Welcome back, {this.props.user}</h1>;
  }
}

class Today extends Component {
  render() {
    return <p>Today is {this.props.date}</p>;
  }
}

const element = <App user="Laurie" date={Date()} />;
ReactDOM.render(element, document.getElementById("root"));
