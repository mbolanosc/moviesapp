// Import the functions you need from the SDKs you need
import {FirebaseApp, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX_r3--B02Di6OytqO61VuMT7rLXimj80",
  authDomain: "movies-reactcourse.firebaseapp.com",
  projectId: "movies-reactcourse",
  storageBucket: "movies-reactcourse.appspot.com",
  messagingSenderId: "832327188412",
  appId: "1:832327188412:web:9e17bd1f852acf17d1f5b9",
  measurementId: "G-M2ZGNSNMQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);


//export const db = getFirestore(app);
export default getFirestore();

export {app, auth }
