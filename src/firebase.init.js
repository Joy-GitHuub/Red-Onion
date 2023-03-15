// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnxg6L6rqA00vpwIOYYSjs_b3Ig8l06G0",
    authDomain: "rad-onion.firebaseapp.com",
    projectId: "rad-onion",
    storageBucket: "rad-onion.appspot.com",
    messagingSenderId: "628202823686",
    appId: "1:628202823686:web:a045a31472528b6cb36387"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;