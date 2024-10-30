// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBOf8qEuuMnKbpIXBCZBy_jLT2thKdzDdM",
  authDomain: "linkproject42.firebaseapp.com",
  projectId: "linkproject42",
  storageBucket: "linkproject42.firebasestorage.app",
  messagingSenderId: "621067113200",
  appId: "1:621067113200:web:4bd7c2cf71665e7453e835"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
