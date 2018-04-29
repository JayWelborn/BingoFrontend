const LOG_IN = 'LOG_IN'

function createLogin (username, password) {
  return {
    type: LOG_IN,
    payload {
      username: username,
      password: password
    }
  }
}
