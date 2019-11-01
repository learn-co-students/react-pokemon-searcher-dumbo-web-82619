import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(){
    super()
    this.state={
      frontDisplay: true
    }
  }

  toggleImage = () => {
    this.setState({
      frontDisplay: !this.state.frontDisplay
    })
  }


  render() {
    // console.log(this.props)
    return (
      <Card onClick={this.toggleImage}>
        <div>
          <div className="image">
            <img src={this.state.frontDisplay ? `${this.props.sprites.front}` : `${this.props.sprites.back}`} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
