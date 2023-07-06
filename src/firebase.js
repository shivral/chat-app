
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCKUSgL6enk7r0NDR7_XZgaac0rpDpKl98",
    authDomain: "chat-app-20999.firebaseapp.com",
    projectId: "chat-app-20999",
    storageBucket: "chat-app-20999.appspot.com",
    messagingSenderId: "907103498736",
    appId: "1:907103498736:web:6e693f971c4a8cccec6d35"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();