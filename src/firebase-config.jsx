// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeJREi8rRdCeidUalkTdKTrpcaRMdSGwk",
  authDomain: "muilessons.firebaseapp.com",
  projectId: "muilessons",
  storageBucket: "muilessons.appspot.com",
  messagingSenderId: "177033131132",
  appId: "1:177033131132:web:c80f314f29a76ddadac5f9",
  measurementId: "G-G7J4Z3PDN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);