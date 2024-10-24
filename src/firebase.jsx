// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBSqTKCIRMlo_0BQHenYsxFA6xKzR6kqSI",
  authDomain: "linkproject36.firebaseapp.com",
  projectId: "linkproject36",
  storageBucket: "linkproject36.appspot.com",
  messagingSenderId: "136309509271",
  appId: "1:136309509271:web:bef4a73af7fb5bcbf92dd2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
