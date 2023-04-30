// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getStorage } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3aeC6AzajCHkftZVxHmdJrEn8sGA3G_k",
  authDomain: "imagesupload-987d3.firebaseapp.com",
  projectId: "imagesupload-987d3",
  storageBucket: "imagesupload-987d3.appspot.com",
  messagingSenderId: "705374992690",
  appId: "1:705374992690:web:b5c4198993dbdc3550ff2b",
  measurementId: "G-LCE89B8WQ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);
