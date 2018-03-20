import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { connect as subscribeToWebsocket } from '../actions/websocket'
import MayorMedal from '../images/mayor-medal.png'
import Avatar from 'material-ui/Avatar';
import './AvatarPlayer.css'

const setClassName = (dead) => {
  if (dead) {
    return 'dead'
  }
}

class AvatarPlayer extends PureComponent {

  componentWillMount() {
    this.props.subscribeToWebsocket()
  }

  renderAvatars(player, index){
   return(
    <div key={index}>
      <div className={setClassName(player.dead)}>
        <div className="avatar">
          <Avatar src={player.photo} size={100} />
          <span className="playerName">
            <div>{player.mayor ? <img src={MayorMedal} className="medal" alt="MayorMedal" /> : ''}</div>
            <div>{player.name}</div>
          </span>
          <div className="playerCharacter">{player.character}</div>
        </div>
      </div>
    </div>
   )
  }

  render() {
    return (
      <div className="avatarContainer">
          { this.props.players.map(this.renderAvatars) }
      </div>
    )
  }
}

export default connect(null, { subscribeToWebsocket})(AvatarPlayer)
