import firebase from "firebase/app"; 
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBAV6z9tpQXmBz8k6-WmOlt12E27ohyXSI",
    authDomain: "ochat-7123e.firebaseapp.com",
    projectId: "ochat-7123e",
    storageBucket: "ochat-7123e.appspot.com",
    messagingSenderId: "66055560177",
    appId: "1:66055560177:web:618d26f2139caa1c9dc250",
    measurementId: "G-G7WPKCGYMK"
}).auth();
