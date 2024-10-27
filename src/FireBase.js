// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCwjLUTZuxjZcV3XriJfml3uXjvdJPrDd8",
    authDomain: "tnapole-56a54.firebaseapp.com",
    projectId: "tnapole-56a54",
    storageBucket: "tnapole-56a54.appspot.com",
    messagingSenderId: "238084341501",
    appId: "1:238084341501:web:46d128c28365ff68d48894",
    measurementId: "G-QMBM7LEVLZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);

export { auth, database };


