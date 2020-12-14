import firebase from 'firebase/app'
import 'firebase/auth'

const fbase = firebase.initializeApp({
  apiKey: "AIzaSyA8a8Xq8ofA3jVIvumypErRfrqr9OgO03o",
  authDomain: "auth-development-e4ae6.firebaseapp.com",
  projectId: "auth-development-e4ae6",
  storageBucket: "auth-development-e4ae6.appspot.com",
  messagingSenderId: "1026530592068",
  appId: "1:1026530592068:web:2ef4a339a32fe62b068311",
  measurementId: "G-045RRH3N9Y"
});


// Initialize Firebase
export const auth = fbase.auth();
export default fbase;

