import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKSUspcfIHaZ8B_Qf5Huppke5Wk9oavCg",
  authDomain: "sampleapp-21045.firebaseapp.com",
  projectId: "sampleapp-21045",
  storageBucket: "sampleapp-21045.firebasestorage.app",
  messagingSenderId: "891283536245",
  appId: "1:891283536245:web:daa8809425e2b950a87b3c"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);