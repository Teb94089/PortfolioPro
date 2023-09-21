// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAue0jmzK04-atIAUK8t7ScD82MjM0dbJs",
  authDomain: "onlinep-e5d29.firebaseapp.com",
  projectId: "onlinep-e5d29",
  storageBucket: "onlinep-e5d29.appspot.com",
  messagingSenderId: "609268881161",
  appId: "1:609268881161:web:fe5785c577cf444b8a65d8",
  measurementId: "G-8TLXZ1C93J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);