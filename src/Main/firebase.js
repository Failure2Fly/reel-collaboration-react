// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwFnitpbuCGN18kkLOiEdJybns7y3Lo1w",
  authDomain: "reel-collaboration.firebaseapp.com",
  databaseURL: "https://reel-collaboration-default-rtdb.firebaseio.com",
  projectId: "reel-collaboration",
  storageBucket: "reel-collaboration.firebasestorage.app",
  messagingSenderId: "724823586848",
  appId: "1:724823586848:web:69ba1dac17d0b2f0442445",
  measurementId: "G-QPBM6BW8JR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  app,
  db,
  auth
}