import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlV3MV9lWzrTroX9tsqkE4biAp3HqXkek",
  authDomain: "react-quiz-maker-ef259.firebaseapp.com",
  projectId: "react-quiz-maker-ef259",
  storageBucket: "react-quiz-maker-ef259.appspot.com",
  messagingSenderId: "529038613185",
  appId: "1:529038613185:web:fa277966e6a2c9fc3b9240",
  measurementId: "G-SYBFMMQ0FK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dp = getFirestore(app);

export default dp;
