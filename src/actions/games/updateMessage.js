import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'
import { /*PLAYERS_UPDATED,*/ PLAYER_MESSAGE_UPDATED } from './subscribe'

const api = new API()

export default (playerId, message) => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    api.patch(`/players/${playerId}/messageread`, message)

      .then((result) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })

        dispatch({
          type: PLAYER_MESSAGE_UPDATED,
          payload: result.body
        })
      })
      .catch((error) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}
