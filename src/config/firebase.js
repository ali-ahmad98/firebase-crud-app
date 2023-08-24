import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase App
const firebaseConfig = {
  apiKey: "AIzaSyCvbzjwkTmHDJ7SMf-bJd9iBhtqqdZVWKA",
  authDomain: "fir-test-app-b7633.firebaseapp.com",
  projectId: "fir-test-app-b7633",
  storageBucket: "fir-test-app-b7633.appspot.com",
  messagingSenderId: "988247890372",
  appId: "1:988247890372:web:47e63f2883a6a11452ec91",
  measurementId: "G-1VVH4HZ0ED",
};
const app = initializeApp(firebaseConfig);
getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app);
