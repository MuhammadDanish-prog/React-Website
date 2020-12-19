import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyB5xPJ5esPSOzQNJvG-w_5plwYzKJRUqAw",
    authDomain: "reactchatapp-17e2c.firebaseapp.com",
    databaseURL: "https://reactchatapp-17e2c.firebaseio.com",
    projectId: "reactchatapp-17e2c",
    storageBucket: "reactchatapp-17e2c.appspot.com",
    messagingSenderId: "698176155757",
    appId: "1:698176155757:web:f695441125fc4882070f64",
    measurementId: "G-D5KYXZ5C3X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;