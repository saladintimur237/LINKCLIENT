// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC_pOgoIeZO5pqbX2SkoffkszMenxWY3Kw",
  authDomain: "linkproject30-9bde4.firebaseapp.com",
  projectId: "linkproject30-9bde4",
  storageBucket: "linkproject30-9bde4.appspot.com",
  messagingSenderId: "330196385199",
  appId: "1:330196385199:web:df728072448a8de973435a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
