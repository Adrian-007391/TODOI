// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBQhgd_AszVnzRtPFHo272fyFtc-D-25A",
  authDomain: "to-do-list-ae70a.firebaseapp.com",
  projectId: "to-do-list-ae70a",
  storageBucket: "to-do-list-ae70a.appspot.com",
  messagingSenderId: "1029506376055",
  appId: "1:1029506376055:web:cfd5259f917b1046810172"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
