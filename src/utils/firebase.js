// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa84VapyCwTYZ33LXWW_R1GILYk7twJHE",
  authDomain: "videogpt-9ce97.firebaseapp.com",
  projectId: "videogpt-9ce97",
  storageBucket: "videogpt-9ce97.firebasestorage.app",
  messagingSenderId: "233547267241",
  appId: "1:233547267241:web:7d28d96be8dae664bebdb8",
  measurementId: "G-DZELV3EKG1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
