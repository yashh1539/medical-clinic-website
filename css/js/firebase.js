// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv-hTitePPtMsRn4lky_kV_-7QzUnHmc0",
  authDomain: "demogym-contact.firebaseapp.com",
  projectId: "demogym-contact",
  storageBucket: "demogym-contact.firebasestorage.app",
  messagingSenderId: "160766278804",
  appId: "1:160766278804:web:aacbc304a5c985ed19c881",
  measurementId: "G-CWQ92VZS9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);