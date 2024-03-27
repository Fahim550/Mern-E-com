// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyD-6oK7ScCjFQ74QxsmT_uUGHi0uAvEoE8",
  authDomain: "full-stack-e-com-717a6.firebaseapp.com",
  projectId: "full-stack-e-com-717a6",
  storageBucket: "full-stack-e-com-717a6.appspot.com",
  messagingSenderId: "815805872873",
  appId: "1:815805872873:web:331402644448df5fec0e78",
  measurementId: "G-T9VVKFCXMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage=getStorage(app)
export const db=getFirestore(app)