// services/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // ← Importa Auth

const firebaseConfig = {
  apiKey: "AIzaSyCZEiYg7N8_MniHVrKjg_zAYnd2PsEhaVs",
  authDomain: "superativoapp.firebaseapp.com",
  projectId: "superativoapp",
  storageBucket: "superativoapp.firbasestorage.app",
  messagingSenderId: "320447428218",
  appId: "1:320447428218:web:9da3e70ba5a74e16b52dc3",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
