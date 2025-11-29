import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9ZM4LUp-kxuH6Rj9mQhgSi-FDxs4LSbA",
  authDomain: "green--guardian.firebaseapp.com",
  projectId: "green--guardian",
  storageBucket: "green--guardian.firebasestorage.app",
  messagingSenderId: "417521512256",
  appId: "1:417521512256:web:f0bccdb8551dc5f7f094a5",
  measurementId: "G-VTWWC16XR6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
