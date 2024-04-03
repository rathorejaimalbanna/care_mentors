// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrGIKcaN25DrSR3GOK6cccfD4n4MCJ720",
  authDomain: "students-info-831b4.firebaseapp.com",
  projectId: "students-info-831b4",
  storageBucket: "students-info-831b4.appspot.com",
  messagingSenderId: "128233279066",
  appId: "1:128233279066:web:b629cd378be0ce6deb1263",
  measurementId: "G-XQJQKNT9D4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);