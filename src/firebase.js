import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAYWpK4rp1z00einCJwN8nopisAi4LjX3w",
  authDomain: "doccumentapp.firebaseapp.com",
  projectId: "doccumentapp",
  storageBucket: "doccumentapp.appspot.com",
  messagingSenderId: "464216027079",
  appId: "1:464216027079:web:057b449f0ee76f81b7f3e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore=getFirestore(app);
