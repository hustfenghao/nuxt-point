import firebase from 'firebase'
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyDd6wbr4oJokHZmFufm-ucXXyO-Qefn1Fk",
      authDomain: "apppoint-1d4ec.firebaseapp.com",
      databaseURL: "https://apppoint-1d4ec.firebaseio.com",
      projectId: "apppoint-1d4ec",
      storageBucket: "apppoint-1d4ec.appspot.com",
      messagingSenderId: "267332444180"
    })
  }

  export default firebase
