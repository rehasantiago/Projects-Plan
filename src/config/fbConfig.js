import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCQ8fdkJh4QdJAQDZiWIJ8gDYZdwPElbug",
    authDomain: "marioplan-ae6b6.firebaseapp.com",
    databaseURL: "https://marioplan-ae6b6.firebaseio.com",
    projectId: "marioplan-ae6b6",
    storageBucket: "marioplan-ae6b6.appspot.com",
    messagingSenderId: "495213754177"
  };

 
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots:true});//to initialize the firestore

export default firebase;