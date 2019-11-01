import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  constructor(){
    super()
    this.state={
      pokemon: [],
      filteredPokemon: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          pokemon: data,
          filteredPokemon: data
        })
      })
  }

  filterPokemon = (e) => {
    let pokemonFiltered = e == '' ? [...this.state.pokemon] : [...this.state.pokemon].filter(poke => poke.name.includes(e.target.value))
    this.setState({
      filteredPokemon: pokemonFiltered
    })
  }

  updateDatabase = (post) => {
    // console.log(this.state.pokemon, "1")
    this.setState({
      pokemon: [post, ...this.state.pokemon],
      filteredPokemon: [post, ...this.state.pokemon]
    })
    // console.log(this.state.pokemon, "2")
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm updateDatabase={this.updateDatabase}/>
        <br />
        <Search onSearchChange={this.filterPokemon} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.filteredPokemon} fetchData={this.state.pokemon}/>
      </div>
    )
  }
}

export default PokemonPage
