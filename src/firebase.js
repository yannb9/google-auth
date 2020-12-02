import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/app'

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MESUREMENT_ID
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth()

export default {
  firebaseConfig, 
}