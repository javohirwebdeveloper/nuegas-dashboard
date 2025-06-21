import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA__S80KGeoDcONg5esF5HYbIkrNYzGaqY",
    authDomain: "nuegas-dashboard.firebaseapp.com",
    projectId: "nuegas-dashboard",
    storageBucket: "nuegas-dashboard.firebasestorage.app",
    messagingSenderId: "101006978512",
    appId: "1:101006978512:web:2a7cc0f07ee4608a5eddd5",
    measurementId: "G-QHMSKTE9HZ"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
