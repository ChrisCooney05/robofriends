import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div>
        <img src="https://robohash.org/Chris" alt="Robot"></img>
        <div>
          <h2>Chris Cooney</h2>
          <p>Chris@test.co.uk</p>
        </div>
      </div>
    );
  }
}
export default Card;
