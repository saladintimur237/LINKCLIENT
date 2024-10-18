// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAOtmCpf-EE0jGz7WPU2WVT9oE2uGTsLu0",
  authDomain: "linkproject31.firebaseapp.com",
  projectId: "linkproject31",
  storageBucket: "linkproject31.appspot.com",
  messagingSenderId: "121445937288",
  appId: "1:121445937288:web:0367d20f94c2c3f2f46f3d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
