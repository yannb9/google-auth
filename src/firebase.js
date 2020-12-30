import firebase from 'firebase'
import 'firebase/auth'

const fbase = firebase.initializeApp({
  apiKey: "AIzaSyAg8mJ_COFiY7jZ_N8a0R8G5pAf-zLLFxY",
  authDomain: "auth-development-2.firebaseapp.com",
  projectId: "auth-development-2",
  storageBucket: "auth-development-2.appspot.com",
  messagingSenderId: "27804168869",
  appId: "1:27804168869:web:aa0eee137eb872812d934c"
});


// Initialize Firebase
export const auth = fbase.auth();
export default fbase;

