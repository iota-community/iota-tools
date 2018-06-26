import firebase from 'firebase'

export default async function loadDB() {
  try {
    firebase.initializeApp({
      databaseURL: 'https://iotatools-3c5b1.firebaseio.com/'
    })
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)
    }
  }

  return firebase.database().ref()
}
