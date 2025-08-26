import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCQVI1EE8wawlsSh6jJhbYnhFo-ZZeJylw",
    authDomain: "realtime-database-4b4d7.firebaseapp.com",
    projectId: "realtime-database-4b4d7",
    storageBucket: "realtime-database-4b4d7.firebasestorage.app",
    messagingSenderId: "38536991217",
    appId: "1:38536991217:web:de527c98d28187ac42b450",
    databaseURL: "https://realtime-database-4b4d7-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
export const dbase = getDatabase(app);