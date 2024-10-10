// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBOyavokIPjTGB9pIyqGTqTHKBj6NNjHIs",
  authDomain: "linkproject20-7b613.firebaseapp.com",
  projectId: "linkproject20-7b613",
  storageBucket: "linkproject20-7b613.appspot.com",
  messagingSenderId: "321049357239",
  appId: "1:321049357239:web:955de61fd66a0e108f1632"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
