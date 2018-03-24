import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PlayerMenuButton from './PlayerMenuButton'
import updateDeath from '../../actions/games/updateDeath'
import updateMayor from '../../actions/games/updateMayor'
import updateSender from '../../actions/games/updateSender'
import updateVillage from '../../actions/games/updateVillage'
import updateCharacter from '../../actions/games/updateCharacter'
import deletePlayer from '../../actions/games/delete'
import MessageBox from './MessageBox'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import './PlayerDialog.css'

const customContentStyle = {
  width: '90%',
  maxWidth: 'none',
}

class PlayerDialog extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      value: 'burger',
    }
  }

  handleOpen = (player, index) => {
    this.setState({open: true})
    this.sendMessage(player, index)
  }

  handleClose = () => {
    this.setState({open: false});
  }

  killPlayer = (player) => {
    const updatedPlayer = {
      dead: !player.dead,
      mayor: false
    }

    this.props.updateDeath(player._id, updatedPlayer)
  }

  makeMayor = (player) => {
     const updatedPlayer = {
       mayor: !player.mayor
     }

     const wakkerdamArray =  this.props.players.filter((player) => {
        return player.village[0].name === "Wakkerdam"
     })
     const sluimervoortArray =  this.props.players.filter((player) => {
       return player.village[0].name === "Sluimervoort"
     })

     const wMayorArray = wakkerdamArray.filter((player) => {
       return player.mayor === true
     })

     const sMayorArray = sluimervoortArray.filter((player) => {
       return player.mayor === true
     })

     if (wMayorArray.length === 0 && player.village[0].name === "Wakkerdam"){
       this.setState({
         mayorOpen: true
       })
      }
     if (sMayorArray.length === 0 && player.village[0].name === "Sluimervoort"){
       this.setState({
         mayorOpen: true
       })
     }
     // eslint-disable-next-line
     if (wMayorArray.length > 0 && player.mayor === true || sMayorArray.length > 0 && player.mayor === true ){
       this.props.updateMayor(player._id, updatedPlayer)
     }
     if (wMayorArray.length > 0 && player.village[0].name === "Wakkerdam"){ return null}
     if (sMayorArray.length > 0 && player.village[0].name === "Sluimervoort"){ return null}
     if (sMayorArray.length > 0 && wMayorArray.length > 0 ){ return null }

      this.props.updateMayor(player._id, updatedPlayer)
   }

   deleteThisPlayer = (player) =>  {
     this.props.deletePlayer(player._id)
   }

  sendMessage = (player, index) => {
    let message = player.messageSent
    if (message !== 'sent' ) {
      return(
      <MessageBox key={index} players={ this.props.players } player={player}/>
      )
    } else {
      return <h1>Message sent!</h1>
    }
  }

  moveVillage = (player) => {
    const village = player.village[0].name
    let newVillage = ""

    if (village === 'Wakkerdam') {
      newVillage = 'Sluimervoort'
    } else {
      newVillage = 'Wakkerdam'
    }

    const updatedVillage = {
      name: newVillage
    }

    this.props.updateVillage(player._id, updatedVillage)
  }

  addWitch = (player) => {
    const updatedCharacter = {
      character: 'heks'
    }

    this.props.updateCharacter(player._id, updatedCharacter)
  }

  addVillager = (player) => {
    const updatedCharacter = {
      character: 'burger'
    }

    this.props.updateCharacter(player._id, updatedCharacter)
  }

  addWerewolf = (player) => {
    const updatedCharacter = {
      character: 'wolf'
    }

    this.props.updateCharacter(player._id, updatedCharacter)
  }

  addHunter = (player) => {
    const updatedCharacter = {
      character: 'jager'
    }

    this.props.updateCharacter(player._id, updatedCharacter)
  }

  addSeer = (player) => {
    const updatedCharacter = {
      character: 'ziener'
    }

    this.props.updateCharacter(player._id, updatedCharacter)
  }

  addCupid = (player) => {
    const updatedCharacter = {
      character: 'cupido'
    }

    this.props.updateCharacter(player._id, updatedCharacter)
  }

  addLover = (player) => {
    const updatedCharacter = {
      character: 'geliefde'
    }

    this.props.updateCharacter(player._id, updatedCharacter)
  }

  addExecutioner = (player) => {
    const updatedCharacter = {
      character: 'beul'
    }

    this.props.updateCharacter(player._id, updatedCharacter)
  }

  addBrother = (player) => {
    const updatedCharacter = {
      character: 'drieling'
    }

    this.props.updateCharacter(player._id, updatedCharacter)
  }

  addSister = (player) => {
    const updatedCharacter = {
      character: 'zusje'
    }

    this.props.updateCharacter(player._id, updatedCharacter)
  }

  addSniper = (player) => {
    const updatedCharacter = {
      character: 'sniper'
    }

    this.props.updateCharacter(player._id, updatedCharacter)
  }

  render() {
    const message = 'message'
    const isMayor = 'isMayor'
    const makeMayor = 'makeMayor'
    const notMayor = 'notMayor'
    const dead = 'dead'
    const DeletePlayer = 'DeletePlayer'
    const village = this.props.player.village[0].name

    const actions = [
      <RaisedButton
        label="Back to game"
        secondary={true}
        onClick={this.handleClose}
      />
    ]

    return (
      <div className="dialog">
        <PlayerMenuButton disabled={this.props.player.dead ? true : false} icon={this.props.player.dead ? notMayor : ( this.props.player.mayor ? makeMayor : isMayor )} onClick={() => this.makeMayor(this.props.player)} />
        <PlayerMenuButton icon={dead} onClick={() => this.killPlayer(this.props.player)}/>
        <PlayerMenuButton disabled={this.props.player.dead? true : false} icon={village} onClick={() => this.moveVillage(this.props.player)}/>
        <DropDownMenu value={this.state.value} labelStyle={{ color: '#1F243D', fontSize: '1rem' }} selectedMenuItemStyle={{ color: '#EFEFEF' }}>
          <MenuItem value="burger" primaryText="burger" onClick={() => this.addVillager(this.props.player)} />
          <MenuItem value="wolf" primaryText="wolf" onClick={() => this.addWerewolf(this.props.player)} />
          <MenuItem value="heks" primaryText="heks" onClick={() => this.addWitch(this.props.player)} />
          <MenuItem value="jager" primaryText="jager" onClick={() => this.addHunter(this.props.player)} />
          <MenuItem value="ziener" primaryText="ziener" onClick={() => this.addSeer(this.props.player)} />
          <MenuItem value="cupido" primaryText="cupido" onClick={() => this.addCupid(this.props.player)} />
          <MenuItem value="geliefde" primaryText="geliefde" onClick={() => this.addLover(this.props.player)} />
          <MenuItem value="beul" primaryText="beul" onClick={() => this.addExecutioner(this.props.player)} />
          <MenuItem value="broer" primaryText="broer" onClick={() => this.addBrother(this.props.player)} />
          <MenuItem value="zusje" primaryText="zusje" onClick={() => this.addSister(this.props.player)} />
          <MenuItem value="sniper" primaryText="sniper" onClick={() => this.addSniper(this.props.player)} />
        </DropDownMenu>
        <PlayerMenuButton icon={DeletePlayer} onClick={() => this.deleteThisPlayer(this.props.player)}/>
        <PlayerMenuButton disabled={this.props.player.messageSent === 'sent' || this.props.player.dead ? true : false } icon={message} onClick={() => this.handleOpen(this.props.player)} />

        <Dialog
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.state.open}
          autoScrollBodyContent={true}
        >
          { this.sendMessage(this.props.player) }
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = ({ players }) => {
  return {
    players
  }
}

export default connect(mapStateToProps, {
  updateDeath,
  updateMayor,
  updateSender,
  updateVillage,
  deletePlayer,
  updateCharacter,
})(PlayerDialog)
