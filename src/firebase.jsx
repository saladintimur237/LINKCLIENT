// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDJvuk-4ctqezRUS9Xm7-Uc6HE7f9Z4V1A",
  authDomain: "stackphamtest.firebaseapp.com",
  projectId: "stackphamtest",
  storageBucket: "stackphamtest.firebasestorage.app",
  messagingSenderId: "868359038747",
  appId: "1:868359038747:web:1f01c21c3a6aecd0ddd5be"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
