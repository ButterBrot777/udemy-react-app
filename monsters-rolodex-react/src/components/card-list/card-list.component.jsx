import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return monsters.map((monster, id) => {
      return <h1 key={id}>{monster.name}</h1>;
    });
  }
}

export default CardList;
