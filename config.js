import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyDWQ7BrNr39gnDdrrqTPwW1fc5gXhadr-k",
  authDomain: "willy-devika.firebaseapp.com",
  databaseURL: "https://willy-devika.firebaseio.com",
  projectId: "willy-devika",
  storageBucket: "willy-devika.appspot.com",
  messagingSenderId: "805605085063",
  appId: "1:805605085063:web:9d5921556a967d1f840d22"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
  