// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAMjDvOy4GFJ7I7cFdDGvRr0dJ0xMVfShU",
  authDomain: "linkproject26.firebaseapp.com",
  projectId: "linkproject26",
  storageBucket: "linkproject26.appspot.com",
  messagingSenderId: "374210734407",
  appId: "1:374210734407:web:f8c30dd3ed4ae1b0ec8462"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
