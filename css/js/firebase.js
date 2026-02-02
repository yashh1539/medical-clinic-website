import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getFirestore } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBv-hTitePPtMsRn4lky_kV_-7QzUnHmc0",
  authDomain: "demogym-contact.firebaseapp.com",
  projectId: "demogym-contact",
  storageBucket: "demogym-contact.appspot.com",
  messagingSenderId: "160766278804",
  appId: "1:160766278804:web:aacbc304a5c985ed19c881"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
