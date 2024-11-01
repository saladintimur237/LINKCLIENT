// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAYMzf-r1Ut-uP7yL1Erxwe2IlRTpYT8yQ",
  authDomain: "linkproject45.firebaseapp.com",
  projectId: "linkproject45",
  storageBucket: "linkproject45.firebasestorage.app",
  messagingSenderId: "553703596019",
  appId: "1:553703596019:web:2a7dab88ca9e1002d2fc86"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
