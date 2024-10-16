// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAx-oPhts56blfthWGj_3UZ45SL_0tNVT4",
  authDomain: "linkproject29.firebaseapp.com",
  projectId: "linkproject29",
  storageBucket: "linkproject29.appspot.com",
  messagingSenderId: "136143558814",
  appId: "1:136143558814:web:565dd46ff2483d1684438f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
