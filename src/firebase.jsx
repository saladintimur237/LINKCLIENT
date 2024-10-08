// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyChqysUbheM1DxxPMyTxYgulrjF4CB_l1Q",
  authDomain: "linkproject18.firebaseapp.com",
  projectId: "linkproject18",
  storageBucket: "linkproject18.appspot.com",
  messagingSenderId: "920291602343",
  appId: "1:920291602343:web:adb8126f53a0b565a61082"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
