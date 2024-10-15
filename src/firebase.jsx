// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDwO123hZs9VqsFGcsQUsOXuQMeg9ipLK0",
  authDomain: "linkproject27.firebaseapp.com",
  projectId: "linkproject27",
  storageBucket: "linkproject27.appspot.com",
  messagingSenderId: "856168491822",
  appId: "1:856168491822:web:cbe81887f33498424ba8bf"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
