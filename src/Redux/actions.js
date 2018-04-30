const LOG_USER_IN = 'LOG_USER_IN'
const LOG_USER_OUT = 'LOG_USER_OUT'

/**
 * Create new action to log in a given user
 *
 * @param  {object} user    user's info
 * @param  {object} profile user's profile info
 */
export function logUserIn(user, profile, token) {
  return {
    type: LOG_USER_IN,
    payload: {
      user: user,
      profile: profile,
      token: token,
    }
  }
}
