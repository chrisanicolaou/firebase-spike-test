// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBtMFWV72l45CWG_FWi1cgsy73TBi1SYGY",

  authDomain: "fir-auth-test-1d968.firebaseapp.com",

  projectId: "fir-auth-test-1d968",

  storageBucket: "fir-auth-test-1d968.appspot.com",

  messagingSenderId: "798428970857",

  appId: "1:798428970857:web:0ec40ac31eccb5c2c487f8",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export {
  db,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  collection,
  addDoc,
};
