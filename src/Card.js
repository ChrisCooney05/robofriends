import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src="https://robohash.org/Chris?size=200x200" alt="Robot"></img>
        <div>
          <h2>Chris Cooney</h2>
          <p>Chris@test.co.uk</p>
        </div>
      </div>
    );
  }
}
export default Card;
