import { ajaxRequest } from 'utils/api-adapter'

export const fetchAuthentication = (login, password) =>
  ajaxRequest('/httpbridge-server/login', {
    method: 'POST',
    body: { login, password },
  })

export const fetchGetToken = () =>
  ajaxRequest('/httpbridge-server/csrfToken/get')
    .then(res => JSON.parse(res).token)
