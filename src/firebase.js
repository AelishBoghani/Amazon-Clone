import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4PA6vt7tyjntKtoKUFtBWx7-urz0PMTE",
    authDomain: "clone-77b6d.firebaseapp.com",
    projectId: "clone-77b6d",
    storageBucket: "clone-77b6d.appspot.com",
    messagingSenderId: "411607321673",
    appId: "1:411607321673:web:a2c5eaaf82e6d6dc420398",
    measurementId: "G-Z2N4GJW8X8"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };