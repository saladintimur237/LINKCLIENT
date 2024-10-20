// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBXoY19w_u8UpqB6mJ0cuWyZZnhJFnRGvc",
  authDomain: "linkproject32.firebaseapp.com",
  projectId: "linkproject32",
  storageBucket: "linkproject32.appspot.com",
  messagingSenderId: "35255012158",
  appId: "1:35255012158:web:f051e4b0b40167054a3a6f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
