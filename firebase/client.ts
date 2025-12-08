// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { get } from "http";

const firebaseConfig = {
  apiKey: "AIzaSyAL9XLqJ_-VTfdKh8Mlg_fEbsbOcJ4vrRQ",
  authDomain: "prepwise-4fe76.firebaseapp.com",
  projectId: "prepwise-4fe76",
  storageBucket: "prepwise-4fe76.firebasestorage.app",
  messagingSenderId: "268442165648",
  appId: "1:268442165648:web:501272d199141899d49315",
  measurementId: "G-EXG67H7TTJ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);