import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  state = {
    pokemon: ""
  }

filterPokemon= (props) => {
  console.log(props)
  return this.props.pokemon
}

filteredPokemon = () => {
   return this.props.pokemon.filter(p =>{ return p.name.includes(this.props.filter)})
}
  render() {
  
   return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>

        {this.filteredPokemon().map(p=>{
        return <PokemonCard pokestats={p} />
        })}
        
      </Card.Group>
    )
  }
}

export default PokemonCollection
