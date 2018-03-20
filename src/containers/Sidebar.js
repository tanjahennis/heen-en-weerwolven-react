import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPlayers} from '../actions/games/fetch'
import Village from './Village'
import { List } from 'material-ui/List'
import './Sidebar.css'

class Sidebar extends PureComponent {
  static propTypes = {
    fetchPlayers: PropTypes.func,
    player: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      photo: PropTypes.object.isRequired,
      mayor: PropTypes.bool,
      dead: PropTypes.bool,
      messageSent: PropTypes.bool,
    }),
  }

  componentWillMount() {
    this.props.fetchPlayers();
  }

  render() {
    const village1 = this.props.players.filter((player) => {
      return player.village[0].name === "Wakkerdam"
    })
    const deadPlayerCountVillage1 = village1.filter((player) => {
      return player.dead === !true
    })

    const village2 = this.props.players.filter((player) => {
      return player.village[0].name === "Sluimervoort"
    })
    const deadPlayerCountVillage2 = village2.filter((player) => {
      return player.dead === !true
    })

    return (
      <div className="sideBar">
        <span className="header">
          <h3>wakkerdam</h3>
          <h3 className="peopleCounter">{deadPlayerCountVillage1.length}/{village1.length}</h3>
        </span>
        <List>
          <Village players={village1} />
        </List>
        <span className="header">
          <h3>sluimervoort</h3>
          <h3 className="peopleCounter">{deadPlayerCountVillage2.length}/{village2.length} </h3>
        </span>
        <List>
          <Village players={village2} />
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

export default connect(mapStateToProps, { fetchPlayers })(Sidebar)
