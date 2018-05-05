import {apiCall, apiRoot} from './api'
import {login} from './login'

const registerURL = apiRoot + 'api-registration/'

export function register(data, logUserIn) {
  let method = 'post'
  // build http headers
  let headers = new Headers({
    'Content-Type': 'application/json'
  })
  // make request body from data given. Spelled out to be purposefully explicit.
  let body = JSON.stringify({
    username: data.username,
    email: data.email,
    password1: data.password1,
    password2: data.password2
  })

  apiCall(registerURL, method, headers, body)
  .then(registrationData => {
    login(data.username, data.password1, logUserIn)
  })
}

export function validateRegistrationData(data) {
  if (!data.username || !data.email || !data.password1 || !data.password2 ||
      data.password1 !== data.password2 || data.password1.length <= 8) {
    return false
  }
  return true
}
