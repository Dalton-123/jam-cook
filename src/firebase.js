
// import firebase from "firebase/compat";

//import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBSXm6-GmAftMXKFIi4cU3JLnpeBjI_eVI",
    authDomain: "myproject-bb84e.firebaseapp.com",
    databaseURL: "https://myproject-bb84e.firebaseio.com",
    projectId: "myproject-bb84e",
    storageBucket: "myproject-bb84e.appspot.com",
    messagingSenderId: "3958394199",
    appId: "1:3958394199:web:1770f9e2a589a33b"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(config)
export default firebaseApp.firestore()