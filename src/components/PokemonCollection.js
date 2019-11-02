import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemon.map(pokemon => 
          <PokemonCard 
            key={pokemon.id}
            name={pokemon.name}
            hp={pokemon.stats[5].value}
            frontImage={pokemon.sprites.front}
            backImage={pokemon.sprites.back}
          />
        )}
      </Card.Group>
    )
  }
}

export default PokemonCollection
