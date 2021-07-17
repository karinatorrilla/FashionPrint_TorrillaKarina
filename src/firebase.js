import firebase from "firebase/app";
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAlPG3tj0q8ytWkWrpypLwLmEz_rcVj9MM",
    authDomain: "fashionprint-778d2.firebaseapp.com",
    projectId: "fashionprint-778d2",
    storageBucket: "fashionprint-778d2.appspot.com",
    messagingSenderId: "594151835566",
    appId: "1:594151835566:web:bcad3642b9a304e4532a3f",
    measurementId: "G-L6BSDK06M9"
  };
  // Initialize Firebase
 const fb = firebase.initializeApp(firebaseConfig);


  export const db = fb.firestore();