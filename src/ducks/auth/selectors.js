import { SessionToken } from 'utils/session'

export const getIsAuthenticated = state =>
  !!state.auth.token.payload && !!state.auth.token.payload.token ||
  !!SessionToken.get()
