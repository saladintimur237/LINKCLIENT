// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAB65W1bAsqlEJ8-t3G1fy-VFelvKaQ9SM",
  authDomain: "linkproject23-2fd65.firebaseapp.com",
  projectId: "linkproject23-2fd65",
  storageBucket: "linkproject23-2fd65.appspot.com",
  messagingSenderId: "37972191584",
  appId: "1:37972191584:web:acb924111355ba063dd605"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
