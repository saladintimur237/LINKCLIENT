// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCuFM1Izry80MpYLN7khSIqnBdjlI9lgbI",
  authDomain: "linkproject28.firebaseapp.com",
  projectId: "linkproject28",
  storageBucket: "linkproject28.appspot.com",
  messagingSenderId: "1071496198189",
  appId: "1:1071496198189:web:d5c563028c1adb334360a4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
