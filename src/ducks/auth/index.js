import fetchReducer from 'ducks/shared/fetch'
import { combineReducers } from 'redux'
import actionTypesAuth from './const'

const { AUTH_FETCH, TOKEN_FETCH } = actionTypesAuth

export default combineReducers({
  login: fetchReducer(AUTH_FETCH),
  token: fetchReducer(TOKEN_FETCH),
})
