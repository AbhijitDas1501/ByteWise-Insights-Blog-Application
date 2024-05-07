// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bytewise-insights.firebaseapp.com",
  projectId: "bytewise-insights",
  storageBucket: "bytewise-insights.appspot.com",
  messagingSenderId: "998443170660",
  appId: "1:998443170660:web:41391461a730c7c3485871"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);