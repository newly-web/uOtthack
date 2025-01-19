// firebase.js

// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyBK-0w354ZjMZVq0XH-jaGUzV0fwdHYUOg",
    authDomain: "ufoundit-78c43.firebaseapp.com",
    projectId: "ufoundit-78c43",
    storageBucket: "ufoundit-78c43.firebasestorage.app",
    messagingSenderId: "749812897833",
    appId: "1:749812897833:web:5a154c421bad3c0154e438",
    measurementId: "G-JNQ16N4V94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Export auth to use it in other files
export { auth, signInWithEmailAndPassword };
