import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    filter: "",
    addPokemon: this.addPokemon
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json())
    .then(data => {
      this.setState({
        pokemons: data
      })
    })
  }

  handleSearchChange = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  addPokemon = (pokemon) => {
    this.setState({
      pokemons: [...this.state.pokemons, pokemon]
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={ this.addPokemon } />
        <br />
        <Search onSearchChange={ this.handleSearchChange.bind(this) } showNoResults={false} />
        <br />
        <PokemonCollection pokemons={ this.state.pokemons } filter={ this.state.filter }/>
      </div>
    )
  }
}

export default PokemonPage
