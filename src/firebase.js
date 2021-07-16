// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDl4KBbk2w4GTouih3nJWCgbTFm9tkV3JY",
    authDomain: "clone-975d5.firebaseapp.com",
    projectId: "clone-975d5",
    storageBucket: "clone-975d5.appspot.com",
    messagingSenderId: "27411433323",
    appId: "1:27411433323:web:6520847433022a8d18ae2e",
    measurementId: "G-85VE97E6DS"
};

//https://clone-a7413-default-rtdb.firebaseio.com/
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth();

export { db, auth };