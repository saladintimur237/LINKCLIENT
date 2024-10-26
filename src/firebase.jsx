// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDkrEAr6Jg494XJdWDaEN-Jch63UfgOe1s",
  authDomain: "linkproject38-62093.firebaseapp.com",
  projectId: "linkproject38-62093",
  storageBucket: "linkproject38-62093.appspot.com",
  messagingSenderId: "829812311565",
  appId: "1:829812311565:web:9119cff7667940e6cb7744"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
