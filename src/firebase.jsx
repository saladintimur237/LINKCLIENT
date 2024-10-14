// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDW8SuxIy08i_TgDSpRKmwMty4oYNFbDkg",
  authDomain: "linkproject24-3c2d4.firebaseapp.com",
  projectId: "linkproject24-3c2d4",
  storageBucket: "linkproject24-3c2d4.appspot.com",
  messagingSenderId: "414245824379",
  appId: "1:414245824379:web:e39ec1f4b6585b76ed3fde"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
