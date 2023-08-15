// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJy-1XEERvf6rqjABPJLwV_RWgGq1nEx0",
  authDomain: "crud-operations-4c89c.firebaseapp.com",
  projectId: "crud-operations-4c89c",
  storageBucket: "crud-operations-4c89c.appspot.com",
  messagingSenderId: "241611964589",
  appId: "1:241611964589:web:1b64aa318e1b0ee7864624"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)