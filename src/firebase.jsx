// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAuZH0CKRgQuKrknD1dvBJP_aKRHcbo6B4",
  authDomain: "linkproject37.firebaseapp.com",
  projectId: "linkproject37",
  storageBucket: "linkproject37.appspot.com",
  messagingSenderId: "154169547490",
  appId: "1:154169547490:web:6a1cc83f864b6c13dd1cbb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
