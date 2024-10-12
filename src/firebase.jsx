// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyASIgaV5uKdp8tHhwgJgYSkSBXMnLEJF0k",
  authDomain: "linkproject22.firebaseapp.com",
  projectId: "linkproject22",
  storageBucket: "linkproject22.appspot.com",
  messagingSenderId: "305753019598",
  appId: "1:305753019598:web:55015bafea93286f982c9f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
