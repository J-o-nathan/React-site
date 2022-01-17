import * as firebase from 'firebase'
import { initializeApp } from "firebase/app";

//These variables should be in an environment variable file and manually passed to Heroku.

const firebaseConfig = {
      apiKey: "AIzaSyArusS5tmXBN_uY7zni9KH8ikK6t2YPOOU",
      authDomain: "react-site-4e20c.firebaseapp.com",
      databaseURL: "https://react-site-4e20c-default-rtdb.firebaseio.com/",
      projectId: "react-site-4e20c",
      storageBucket: "react-site-4e20c.appspot.com",
      messagingSenderId: "98533306736",
      appId: "1:98533306736:web:35cc9b9c16f122008adfb5",
      measurementId: "G-0VWBJ4K9K4"      
  };

  const app = initializeApp(firebaseConfig);

  const database = firebase.database()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
  
  export { firebase, googleAuthProvider }
