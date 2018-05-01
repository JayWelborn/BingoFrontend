import {createStore} from 'redux'
import bingoApp from './reducers'

export const store = createStore(bingoApp)

// import {logUserIn, logUserOut} from './actions'

// // log initial state
// console.log(store.getState())

// // log each time the state changes.
// // subscrie() returns a function for unsubscribing
// const unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

// // do some stuff
// let user = {
//   username: 'timmy',
//   id: 9,
//   profile: 'userProfile link'
// }

// let profile = {
//   id: 7,
//   website: 'https://www.google.com',
// }

// let token = '9992938498adsfasdf'
// store.dispatch(logUserIn(user, profile, token))
// store.dispatch(logUserOut)
