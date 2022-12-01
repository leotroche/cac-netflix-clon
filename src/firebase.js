// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyCzniz-fwDjwFjJltYIteCxT03DCBEoTKE",
  authDomain:"clon-netflix-react.firebaseapp.com",
  projectId:"clon-netflix-react",
  storageBucket:"clon-netflix-react.appspot.com",
  messagingSenderId:"349357549393",
  appId:"1:349357549393:web:c9c7a9da4bfaf09e605570"
// REACT_APP_FIREBASE_API_KEY=AIzaSyCzniz-fwDjwFjJltYIteCxT03DCBEoTKE
// REACT_APP_FIREBASE_AUTH_DOMAIN=clon-netflix-react.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=clon-netflix-react
// REACT_APP_FIREBASE_STORAGE_BUCKET=clon-netflix-react.appspot.com
// REACT_APP_MESSAGING_SENDER=349357549393
// REACT_APP_APP_ID=1:349357549393:web:c9c7a9da4bfaf09e605570
//import.meta.env.VITE__APP_FIREBASE_API_KEY
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);