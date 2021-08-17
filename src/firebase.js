import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAQjH2UHF5ZHMJCsIj8ijPk7PsjOSUxJiM",
  authDomain: "fashionprintv2.firebaseapp.com",
  projectId: "fashionprintv2",
  storageBucket: "fashionprintv2.appspot.com",
  messagingSenderId: "545478143647",
  appId: "1:545478143647:web:9f55a8f4b01fc3e6473caa",
  measurementId: "G-ZV7G4G410B",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
