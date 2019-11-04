import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    display: true
  }

  displaySide = (pokemon) => {
    return this.state.display === true ? this.props.img.front : this.props.img.back
  }

  cardClicked = () => {
    this.setState({
      display: !this.state.display
    })
  }

  render() {
    return (
      <Card onClick={ this.cardClicked }>
        <div>
          <div className="image">
            <img src={ this.displaySide() } alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{ this.props.name }</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              { this.props.hp }
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
