import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import MovePlayers from 'material-ui/svg-icons/action/card-travel'
import './VillageMenuButton.css'

class VillageMenuButton extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  }

render() {
    const { onClick } = this.props

    return (
      <div className="villageMenuButton">
        <p>verhuis iedereen</p>
        <IconButton
          tooltip={this.props.label}
          onClick={onClick}
          tooltipPosition="bottom-right">
          <MovePlayers />
        </IconButton>
      </div>
    )
  }
}

export default VillageMenuButton
