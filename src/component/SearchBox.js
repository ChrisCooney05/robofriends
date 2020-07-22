import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    const { onSearchChange } = this.props;
    return (
      <div className="pa2">
        <input
          className="pa3 ba b--green bg-lightest-blue"
          type="search"
          placeholder="Search Robots"
          onChange={onSearchChange} //onChange picks up when txt is entered and executes function
        />
      </div>
    );
  }
}

export default SearchBox;
