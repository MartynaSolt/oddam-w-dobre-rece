// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD36cXa56qjGiy8soNFQIjY7di6lcAB0O4",
  authDomain: "oddaj-rzeczy-156f4.firebaseapp.com",
  projectId: "oddaj-rzeczy-156f4",
  storageBucket: "oddaj-rzeczy-156f4.appspot.com",
  messagingSenderId: "563967442342",
  appId: "1:563967442342:web:37f8450034cec948a52367",
  measurementId: "G-VXKR8PQ3NK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);