import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDtt8WUCL5FP6Fm2H8J4Nw74qHd1pGRPZk",
    authDomain: "valhalla-counter-db.firebaseapp.com",
    projectId: "valhalla-counter-db",
    storageBucket: "valhalla-counter-db.firebasestorage.app",
    messagingSenderId: "16428603081",
    appId: "1:16428603081:web:4b4c216dac822a5f345f18",
    measurementId: "G-E8EN4KJ8YT"
  };

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };