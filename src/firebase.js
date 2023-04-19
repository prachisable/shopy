
//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyACjJTPzA7d1YXBvEtrhBN9PVVRl2qpmoQ",
  authDomain: "shopy-8817e.firebaseapp.com",
  projectId: "shopy-8817e",
  databaseURL: "https://shopy-8817e.firebaseio.com",
  storageBucket: "shopy-8817e.appspot.com",
  messagingSenderId: "1020960547339",
  appId: "1:1020960547339:web:745be2733ed5b3a48c9d0e",
  //measurementId: "G-LCPVNT6QVX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };