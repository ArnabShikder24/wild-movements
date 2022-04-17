// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDukgqDxlsrirnDnMK81raBD4jJR0vnkzw",
  authDomain: "assignment-10-ba1cc.firebaseapp.com",
  projectId: "assignment-10-ba1cc",
  storageBucket: "assignment-10-ba1cc.appspot.com",
  messagingSenderId: "982316957760",
  appId: "1:982316957760:web:97cf05d36102411ab0dfa5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
