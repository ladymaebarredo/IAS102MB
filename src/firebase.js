import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-librari
const firebaseConfig = {
  apiKey: "AIzaSyDQDtJA9Sip3VxZ1stQ1MBo-Y7-9Zjsnnc",
  authDomain: "movies-39bc7.firebaseapp.com",
  databaseURL: "https://movies-39bc7-default-rtdb.firebaseio.com",
  projectId: "movies-39bc7",
  storageBucket: "movies-39bc7.appspot.com",
  messagingSenderId: "1081490328633",
  appId: "1:1081490328633:web:9da36cf6b09980b5b611e8",
  measurementId: "G-XMYWC8SS7G"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


