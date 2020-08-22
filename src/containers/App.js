import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import { connect } from "react-redux";
import "../app.css";

import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  //we filter the robots we have in state against the searchfield with have stored in state to return any matches
  render() {
    const { searchField, robots, onSearchChange, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    //0 evaluates as false and ! turns it into true so its easier to read vs .length === 0
    if (isPending) {
      return <h1 className="tc">Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox onSearchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />;
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}
//scroll is a wrapper class
//ErrorBoundary will catch any errors we get
//we construct a onSearchChange method and pass that in as a prop to SearchBox
export default connect(mapStateToProps, mapDispatchToProps)(App);
