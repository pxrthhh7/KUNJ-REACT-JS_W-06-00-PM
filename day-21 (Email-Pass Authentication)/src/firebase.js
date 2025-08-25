// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlc1xNvLvg4MYLKcTBHP_d4iALJpMdgCE",
  authDomain: "festivalapp-f78f6.firebaseapp.com",
  projectId: "festivalapp-f78f6",
  storageBucket: "festivalapp-f78f6.firebasestorage.app",
  messagingSenderId: "942454362388",
  appId: "1:942454362388:web:fe64a5263120f3e1f7f201"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)