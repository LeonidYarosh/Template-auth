import { push } from 'react-router-redux'
import { SessionToken } from './session'

export function ajaxRequest(url, options = {}) {
  const token = SessionToken.get()
  const tokenPrefix = 'Bearer'
  const authUrl = '/auth'

  const _options = {
    ...options,
    cache: 'no-cache', // default | no-store | reload | no-cache | force-cache | only-if-cached
    credentials: 'same-origin', // omit | same-origin | include
    mode: 'same-origin', // same-origin | no-cors | cors
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }

  if (_options.body) {
    _options.body = JSON.stringify(_options.body)
  }

  if (token) {
    _options.headers.Authorization = `${tokenPrefix} ${token}`
  }

  return fetch(url, _options)
    .then(response => {
      return response.text().then(text => {
        let payload = text

        if (response.headers.get('Content-Type') === 'application/json') {
          try {
            payload = JSON.parse(text)
          }
          catch (e) {
            console.warn("Can't parse response as JSON:", text)
            payload = text
          }
        }

        return { response, payload }
      })
    })
    .then(({ response, payload }) => {
      if (!response.ok) {
        if (response.status === 401) {
          SessionToken.remove()
          push(authUrl)
        }
        return Promise.reject({
          status: response.status,
          ...payload,
        })
      }

      return Promise.resolve(payload)
    })
}
