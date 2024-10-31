// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBJ7vVymec3cd5VDPfA816JOrKbl9GpqGg",
  authDomain: "linkproject44.firebaseapp.com",
  projectId: "linkproject44",
  storageBucket: "linkproject44.firebasestorage.app",
  messagingSenderId: "151850026101",
  appId: "1:151850026101:web:d07528df7ee1ec2ab2a43c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
