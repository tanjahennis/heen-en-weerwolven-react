import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Divider from 'material-ui/Divider'
import { fetchPlayers } from '../actions/games/fetch'
import AvatarPlayer from './AvatarPlayer'
import { List } from 'material-ui/List'
import './VillageAvatar.css'

class VillageAvatar extends PureComponent {
  componentWillMount() {
    this.props.fetchPlayers();
  }

  render() {
    const village1 = this.props.players.filter((player) => {
      return player.village[0].name === "Wakkerdam"
    })

    const village2 = this.props.players.filter((player) => {
      return player.village[0].name === "Sluimervoort"
    })

    return (

      <div style={{ paddingLeft : 102, paddingRight : 102 }}>
        <List style={{ marginTop : 10 }}>
          <AvatarPlayer players={village1} />
        </List>

        <div className="divider">
          <p>wakkerdam</p>
          <Divider />
          <p>sluimervoort</p>
        </div>

        <List style={{ marginTop : 10 }}>
          <AvatarPlayer players={village2} />
        </List>

      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, players }) => {
  return {
    players
  }
}

export default connect(mapStateToProps, { fetchPlayers })(VillageAvatar)
