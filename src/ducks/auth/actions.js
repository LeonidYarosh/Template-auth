import { fetchAuthentication, fetchGetToken } from 'api/auth'
import { SessionToken } from 'utils/session'
import { getFetchActions } from 'ducks/shared/fetch'
import actionTypesAuth from './const'

export const authentication = ({ login, password }) => async dispatch => {
  const actions = getFetchActions(actionTypesAuth.AUTH_FETCH)
  try {
    dispatch(actions.started())
    await fetchAuthentication(login, password)
    dispatch(actions.success(true))
    dispatch(getToken())
  }
  catch (err) {
    dispatch(actions.failure(err))
  }
}

export const getToken = () => async dispatch => {
  const actions = getFetchActions(actionTypesAuth.TOKEN_FETCH)

  try {
    dispatch(actions.started())
    const token = await fetchGetToken()

    SessionToken.set(token)
    dispatch(actions.success({ token }))
  }
  catch (err) {
    dispatch(actions.failure(err))
  }
}

export const removeToken = () => dispatch => {
  const actions = getFetchActions(actionTypesAuth.TOKEN_FETCH)
  SessionToken.remove()
  dispatch(actions.success())
}
