// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn3kscger7PmrjWvxl2DkjQy3_qc1Gmp4",
  authDomain: "dragon-news-fsociety.firebaseapp.com",
  projectId: "dragon-news-fsociety",
  storageBucket: "dragon-news-fsociety.firebasestorage.app",
  messagingSenderId: "882674273200",
  appId: "1:882674273200:web:301b77c995d2d4cc25e475",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;