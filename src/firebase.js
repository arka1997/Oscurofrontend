// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlvaMRPchKH4mW1HRv8aW7kCzDmneYRG4",
  authDomain: "insta-clone-50415.firebaseapp.com",
  projectId: "insta-clone-50415",
  storageBucket: "insta-clone-50415.appspot.com",
  messagingSenderId: "904206873477",
  appId: "1:904206873477:web:305dc7d0169fb9cae3caec",
  measurementId: "G-1N0N6WE3L6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);