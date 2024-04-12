// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAFEtosMMPGZKaRGQbCaLDqZOpjAFYs7NY",
  authDomain: "cv-application-7b37c.firebaseapp.com",
  projectId: "cv-application-7b37c",
  storageBucket: "cv-application-7b37c.appspot.com",
  messagingSenderId: "503620518148",
  appId: "1:503620518148:web:0d145bbf93f8834bc8d051",
  measurementId: "G-2V9V92JJ5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);