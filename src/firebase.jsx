// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAd-W0DCIP_AnBHL6RGvIw8D9l6kYE_Xus",
  authDomain: "linkproject43.firebaseapp.com",
  projectId: "linkproject43",
  storageBucket: "linkproject43.appspot.com",
  messagingSenderId: "947977902417",
  appId: "1:947977902417:web:9b4a702275bfa47cf01b70"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
