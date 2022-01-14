// App.js

import React, { Component } from 'react'
import './App.css'
import { PokeList, PokeView, Pokemon } from './components'

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemon: {
        id: 1,
        name: "bulbasaur",
        height: 1.79,
        weight: 69,
        type: "grass",
        ability:"overgrow",
        moves:"razor-wind",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
      }
    }

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);
        this.setState({ pokemon });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
          <section className="header"></section>
          <section className="container">
          <PokeList handleOnClick={this.handleOnClick} />
          <PokeView pokemon={this.state.pokemon} />
        </section>
        </div>
    );
  }
}

export default App;