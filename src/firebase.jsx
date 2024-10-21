// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyALmhl9LBjonmVe60wWELfJG2hDO7Eoa9c",
  authDomain: "linkproject33.firebaseapp.com",
  projectId: "linkproject33",
  storageBucket: "linkproject33.appspot.com",
  messagingSenderId: "130123087640",
  appId: "1:130123087640:web:6f7cae13303e84cfd0286d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
