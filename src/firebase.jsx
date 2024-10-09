// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAjORgam5X4M96woHWmUriNI8cCIm6L8s8",
  authDomain: "linkproject19.firebaseapp.com",
  projectId: "linkproject19",
  storageBucket: "linkproject19.appspot.com",
  messagingSenderId: "614635901504",
  appId: "1:614635901504:web:a12ba454324095db3785a5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
