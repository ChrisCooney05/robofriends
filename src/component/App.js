import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import "../app.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }
  //by using an arrow function we can keep the value of this. as the App class, if not we will get an undefined
  //error back
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value }); //uses to change the state object, must use setState()
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json()) //turn response into json
      .then((users) => this.setState({ robots: users }));
  }
  //we now fetch users from an api and store that in state after App has mounted

  //we filter the robots we have in state against the searchfield with have stored in state to return any matches
  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    if (this.state.robots.length === 0) {
      return <h1 className="tc">Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox onSearchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />;
          </Scroll>
        </div>
      );
    }
  }
}
//we construct a onSearchChange method and pass that in as a prop to SearchBox
export default App;
