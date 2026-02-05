// Firebase CDN imports (WORKS in normal HTML)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your Firebase configuration (KEEP SAME)
const firebaseConfig = {
  apiKey: "AIzaSyA6Al9qIIhU5hF8jGCQ0bdJHBo8W9KdMTM",
  authDomain: "medical-clinic-cfa71.firebaseapp.com",
  projectId: "medical-clinic-cfa71",
  storageBucket: "medical-clinic-cfa71.firebasestorage.app",
  messagingSenderId: "215124297019",
  appId: "1:215124297019:web:106559b2ff35d75700231e",
  measurementId: "G-XQD6M0Z98S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore DATABASE
export const db = getFirestore(app);
