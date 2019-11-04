import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  findHP = (pokemon) => {
    let hp = pokemon.stats.filter(stat => stat["name"] === "hp")
    return hp[0]["value"]
  }

  filterPokemons = () => {
    return this.props.pokemons.filter(pokemon =>
      pokemon.name.includes(this.props.filter)
    )
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        { this.filterPokemons().map(pokemon => {
          return <PokemonCard name={ pokemon.name } img={ pokemon.sprites } hp={this.findHP(pokemon)}/>
        }) }
      </Card.Group>
    )
  }
}

export default PokemonCollection
