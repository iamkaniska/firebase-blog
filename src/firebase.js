import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6S92OqIgNUhj_oxZMmVrNGUzJILLsaAk",
  authDomain: "fee-blog2.firebaseapp.com",
  projectId: "fee-blog2",
  storageBucket: "fee-blog2.appspot.com",
  messagingSenderId: "251444927663",
  appId: "1:251444927663:web:98a8ed5d98c19534f3885a",
  measurementId: "G-0EQJP4DRQC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
