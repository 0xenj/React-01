import React, { Component } from "react";
import ReactDOM from "react-dom";

const renderListOfClients = (clients) => {
  return clients.map((client) => <li>{client}</li>);
};

class Clients extends Component {
  render() {
    return <ul>{renderListOfClients(this.props.clients)}</ul>;
  }
}

const element = <Clients clients={["Batman", "Spiderman", "IronMan"]} />;
ReactDOM.render(element, document.getElementById("root"));
