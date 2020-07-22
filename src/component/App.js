import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "../robots";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: "",
    };
  }

  onSearchChange(event) {
    console.log(event);
  }

  render() {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList robots={this.state.robots} />;
      </div>
    );
  }
}
//we construct a onSearchChange method and pass that in as a prop to SearchBox
export default App;
