import React from "react";
import CardList from "./CardList";
import { robots } from "../robots";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>RoboFriends</h1>
        <CardList robots={robots} />;
      </div>
    );
  }
}

export default App;
