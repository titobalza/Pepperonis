import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCXgzaHd-Z_q0FR6Nqr8_7bI8XxuI8pdTc",
  authDomain: "microproyecto2-42015.firebaseapp.com",
  databaseURL: "https://microproyecto2-42015-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "microproyecto2-42015",
  storageBucket: "microproyecto2-42015.appspot.com",
  messagingSenderId: "505486980081",
  appId: "1:505486980081:web:ca6d6b53e77e2f982c0a50",
  measurementId: "G-RCZFXXMMH3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);
export { auth, provider, database};
