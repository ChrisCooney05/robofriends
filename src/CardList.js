import React from "react";
import Card from "./Card";

class CardList extends React.Component {
  render() {
    const { robots } = this.props;
    const robotCardsArray = robots.map((robot) => {
      return <Card id={robot.id} name={robot.name} email={robot.email} />;
    });
    return <div>{robotCardsArray}</div>;
  }
}

export default CardList;
