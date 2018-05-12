// appState = {
//   userLoggedIn: boolean,
//   currentUser {
//     "url": "http://localhost:8000/api/users/6/",
//     "id": 6,
//     "username": "jwelborn",
//     "bingo_cards": [
//         "http://localhost:8000/api/cards/5/",
//         "http://localhost:8000/api/cards/7/",
//         "http://localhost:8000/api/cards/8/",
//         "http://localhost:8000/api/cards/9/"
//     ],
//     "profile": "http://localhost:8000/api/profiles/5/",
//     "email": "jesse.welborn@gmail.com"
//   },
//   currentProfile {
//     "url": "http://localhost:8000/api/profiles/5/",
//     "user": "http://localhost:8000/api/users/6/",
//     "created_date": "2017-11-02T00:00:00Z",
//     "slug": "jwelborn",
//     "picture": "http://localhost:8000/media/profile_images/blog-profile_BP4glgO.jpg",
//     "website": "http://www.jaywelborn.com",
//     "about_me": "I like cheese and rice. I also like python and making bingo cards to pass time in silly classes and briefings."
//   }
// }

import {
  LOG_USER_IN, LOG_USER_OUT, UPDATE_USER, UPDATE_PROFILE
} from './actions'


/**
 * App initilaizes an empty state
 * @type {Object}
 */
const initialState = {
  userLoggedIn: false,
  currentUser: {},
  currentProfile: {},
  token: null,
}

/**
 * Reducer for using actions to update app state
 *
 * @param  {object} state  current state of app
 * @param  {object} action redux action to update state
 */
export default function bingoApp(state = initialState, action) {

  switch (action.type) {

    case LOG_USER_IN:
      return Object.assign({}, state, {
        userLoggedIn: true,
        currentUser: action.payload.user,
        currentProfile: action.payload.profile,
        token: action.payload.token,
      })

    case LOG_USER_OUT:
      return initialState

    case UPDATE_USER:
      return Object.assign({}, state, {
        currentUser: action.payload.user
      })

    case UPDATE_PROFILE:
      return Object.assign({}, state, {
        currentProfile: action.payload.profile
      })

    default:
      return state
  }
}
