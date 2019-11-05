import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    frontBack: true
  }

  handleClick = (evt) => {
    if(evt.type === 'mousedown'){
    this.setState({
      frontBack: !this.state.frontBack
    })  
    }else{
      this.setState({
        frontBack: !this.state.frontBack
      }) 
    }
    
  }

  pokepic = (props) => {
   
  }


  render() {
   console.log(this.props.pokestats)
    return (
      <Card>
        <div onMouseDown={this.handleClick} onMouseUp={this.handleClick} >
          <div key="image" className="image">
            <img src={this.state.frontBack ? this.props.pokestats.sprites.front :  this.props.pokestats.sprites.back } alt="oh no!" name="pic" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokestats.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokestats.stats.map( stat => {
                if(stat.name === "hp")
                return stat.value
              }

              )}
            
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
