import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import PokemonSearch from './PokemonSearch'
import _ from 'lodash'

class PokemonPage extends React.Component {

state = {
  pokemon: [],
  filter: ""
}

  componentDidMount(){
    
fetch('http://localhost:3000/pokemon')
.then(r => r.json())
.then(rjson => {
  this.setState({
    pokemon: rjson
  })
})
  }

  handleSearchChange=(evt) => {
     let input = evt.target.value
     this.setState({
       filter: input
     })
  }


  render() {
    // console.log(this.state.pokemon.length)
 
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onSearchChange={this.handleSearchChange} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon} filter={this.state.filter} />
      </div>
    )
  }
}

export default PokemonPage
