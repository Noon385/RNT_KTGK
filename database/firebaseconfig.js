// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSfzWfdzrnAYv_6dGoyQ2bshEe_VK2kUw",
  authDomain: "ktgk-982f5.firebaseapp.com",
  databaseURL: "https://ktgk-982f5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ktgk-982f5",
  storageBucket: "ktgk-982f5.appspot.com",
  messagingSenderId: "147691270795",
  appId: "1:147691270795:web:e63f8468bbc85760209a8e",
  measurementId: "G-0ZTVDDTZKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth,db};