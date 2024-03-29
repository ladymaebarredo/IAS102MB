// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore'; 
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQlAyD_ozdEg4Iybq5VrA_Om-fpmuy2kk",
    authDomain: "todo-fd235.firebaseapp.com",
    projectId: "todo-fd235",
    storageBucket: "todo-fd235.appspot.com",
    messagingSenderId: "566952235446",
    appId: "1:566952235446:web:f2d124282b7319513c7117"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)
const db = getFirestore(app);

export { db };