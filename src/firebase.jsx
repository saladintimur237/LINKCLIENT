// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBux6Ble0QSwiCZmKqTmcM4c-cxB9WCGlM",
  authDomain: "linkproject21-dd358.firebaseapp.com",
  projectId: "linkproject21-dd358",
  storageBucket: "linkproject21-dd358.appspot.com",
  messagingSenderId: "85035869062",
  appId: "1:85035869062:web:e6e967af1ec657c29a4207"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
