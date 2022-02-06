// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3aoT7rurcz5lM9dUXwUUgB5FVLJPLQs4",
  authDomain: "erker-landing.firebaseapp.com",
  projectId: "erker-landing",
  storageBucket: "erker-landing.appspot.com",
  messagingSenderId: "997902137587",
  appId: "1:997902137587:web:adb6294dc10abc01e1df86",
  measurementId: "G-17C5YTXWH4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
