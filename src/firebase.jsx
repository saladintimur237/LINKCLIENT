// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCwJXdOhw4SACl6MCJrX1WW2r6eg6rN36c",
  authDomain: "linkproject25.firebaseapp.com",
  projectId: "linkproject25",
  storageBucket: "linkproject25.appspot.com",
  messagingSenderId: "163982550015",
  appId: "1:163982550015:web:a38df980f30911640b7dca"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
