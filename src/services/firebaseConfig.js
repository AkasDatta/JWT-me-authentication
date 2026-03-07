// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2gAS1Nwd4aNlxbRxwqeAZuP25e2iY4tc",
  authDomain: "jwt-me-authentication.firebaseapp.com",
  projectId: "jwt-me-authentication",
  appId: "1:179962823875:web:1da5038d5f5b43d5514e76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
