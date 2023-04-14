// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVASjS7ij4pqWgR8LBg5Q4rD1lxomRVFU",
  authDomain: "todolist-cc8c7.firebaseapp.com",
  projectId: "todolist-cc8c7",
  storageBucket: "todolist-cc8c7.appspot.com",
  messagingSenderId: "499805044742",
  appId: "1:499805044742:web:53944125ac8d43c1848387",
  measurementId: "G-TRYMEHLZTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);