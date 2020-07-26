import React, { Component } from "react";
import "./Pokecard.css";
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";

function getNum(id) {
  const requiredLength = 3;
  let prepend = '';
  let number = id.toString();
  if (number.length !== requiredLength) {
    for (let index = 0; index < requiredLength - number.length; index++) {
      prepend += '0';
    }
    return prepend + number;
  }
  return number
}

let padToThree = (number) => (number <= 999  ? `00${number}`.slice(-3) : number)

class Pokecard extends Component {
  render() {
    let newId = getNum(this.props.id)
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.pokemonName}</h1>
        <div className="Pokecard-image">
          <img src={imgSrc} alt={this.props.pokemonName} />
        </div>
        <div className="Pokecard-data">EXP: {this.props.exp}</div>
        <div className="Pokecard-data">Type: {this.props.type}</div>
      </div>
    );
  }
}

export default Pokecard;
