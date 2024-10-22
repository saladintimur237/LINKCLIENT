// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA37Eh1R1cbJp7YiBuOXQJZn1TCtn5rXRY",
  authDomain: "linkproject34.firebaseapp.com",
  projectId: "linkproject34",
  storageBucket: "linkproject34.appspot.com",
  messagingSenderId: "848286357545",
  appId: "1:848286357545:web:e5a944e68e2b2679ec2438"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
