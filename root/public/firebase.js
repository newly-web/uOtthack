// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);