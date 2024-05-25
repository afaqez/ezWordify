// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzlAhmJInRquJw0hyzCAXVYqS4lYJmXkA",
  authDomain: "ezwordify.firebaseapp.com",
  projectId: "ezwordify",
  storageBucket: "ezwordify.appspot.com",
  messagingSenderId: "19914437614",
  appId: "1:19914437614:web:9f7149c2cd6dc4ab5b14ff",
  measurementId: "G-CNTV6D71NE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { auth };
