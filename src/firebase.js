import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBN8OA7z1h-fhKEQV7P7LmVlSOqUmIRN0Q",
  authDomain: "chat-8907d.firebaseapp.com",
  projectId: "chat-8907d",
  storageBucket: "chat-8907d.appspot.com",
  messagingSenderId: "772214354496",
  appId: "1:772214354496:web:eb37484108d41e8159a5a5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
