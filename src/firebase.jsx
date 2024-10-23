// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD49aKBgoNeppaHNnKkNNnfuXEt5FtTF-w",
  authDomain: "linkproject35.firebaseapp.com",
  projectId: "linkproject35",
  storageBucket: "linkproject35.appspot.com",
  messagingSenderId: "720688132053",
  appId: "1:720688132053:web:787ded55a2eb1fc11c575c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
