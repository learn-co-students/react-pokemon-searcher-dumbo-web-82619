import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import {Search} from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchInput: ''
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(pokemonArr => {
      this.setState({
        pokemon: pokemonArr
      })
    })
  }

  addPokemon = (name, hp, frontImg, backImg) => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        stats: [{}, {}, {}, {}, {}, {value: parseInt(hp, 10)}],
        sprites: {
          front: frontImg,
          back: backImg
        }
      })
    })
    .then(response => response.json())
    .then(newPokemon => {
      this.setState({
        pokemon: [...this.state.pokemon, newPokemon]
      })
    }) 
  }

  searchHandler = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  pokemonSelection = () => {
    return this.state.pokemon.filter(pokemon => pokemon.name.includes(this.state.searchInput))
  }

  render() { 
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onSearchChange={this.searchHandler} showNoResults={false}/> 
        <br />
        <PokemonCollection pokemon={this.pokemonSelection()}/>
      </div>
    )
  }
}

export default PokemonPage
//_.debounce(() => this.searchHandler, 500)