import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA8izBT54GQjNrtlwKVo4tcusZUmF4Cbs4",
    authDomain: "userdetails-830ea.firebaseapp.com",
    projectId: "userdetails-830ea",
    storageBucket: "userdetails-830ea.appspot.com",
    messagingSenderId: "446021778383",
    appId: "1:446021778383:web:8980a6f9e34df277b9b0ba"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };