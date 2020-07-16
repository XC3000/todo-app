
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAihclMR3YuUkp9hYJodZfmYpNo7dzey4E",
  authDomain: "todo-app-cp-ee748.firebaseapp.com",
  databaseURL: "https://todo-app-cp-ee748.firebaseio.com",
  projectId: "todo-app-cp-ee748",
  storageBucket: "todo-app-cp-ee748.appspot.com",
  messagingSenderId: "780118980225",
  appId: "1:780118980225:web:f0747e15b53dd648997f80",
  measurementId: "G-V4ESSTGGW6",
});

const db = firebaseApp.firestore();

export default db;
