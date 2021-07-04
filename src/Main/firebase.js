import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCwFnitpbuCGN18kkLOiEdJybns7y3Lo1w",
    authDomain: "reel-collaboration.firebaseapp.com",
    databaseURL: "https://reel-collaboration-default-rtdb.firebaseio.com",
    projectId: "reel-collaboration",
    storageBucket: "reel-collaboration.appspot.com",
    messagingSenderId: "724823586848",
    appId: "1:724823586848:web:69ba1dac17d0b2f0442445",
    measurementId: "G-QPBM6BW8JR"
  };

firebase.initializeApp(firebaseConfig);
const firebaseDatabase = firebase.database();

export {
    firebase,
    firebaseDatabase
}