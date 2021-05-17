import firebase from 'firebase/app';
import 'firebase/firebase-auth';

const firebaseConfig = {
    apiKey: "AIzaSyCwFnitpbuCGN18kkLOiEdJybns7y3Lo1w",
    authDomain: "reel-collaboration.firebaseapp.com",
    projectId: "reel-collaboration",
    storageBucket: "reel-collaboration.appspot.com",
    messagingSenderId: "724823586848",
    appId: "1:724823586848:web:69ba1dac17d0b2f0442445",
    measurementId: "G-QPBM6BW8JR"
};

firebase.initializeApp(firebaseConfig);


export {
    firebase
}