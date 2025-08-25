import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlc1xNvLvg4MYLKcTBHP_d4iALJpMdgCE",
  authDomain: "festivalapp-f78f6.firebaseapp.com",
  projectId: "festivalapp-f78f6",
  storageBucket: "festivalapp-f78f6.firebasestorage.app",
  messagingSenderId: "942454362388",
  appId: "1:942454362388:web:fe64a5263120f3e1f7f201"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);